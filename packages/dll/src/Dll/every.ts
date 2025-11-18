import type { Dll, DllLink } from "."

/**
 * Checks if all elements match the predicate; supports type guards.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([2, 4, 6, 8]);
 * console.log(Dll.every(dll, (value) => value % 2 === 0)); // true
 * ```
 */
export function every<T, U extends T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => value is U): dll is Dll<U>
export function every<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean
export function every<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean {
    let pivot = dll.head
    while (pivot) {
        if (!predicate(pivot.value, pivot, dll)) return false
        pivot = pivot.next
    }
    return true
}
