import type { Dll, DllLink } from "./types"

/**
 * Checks if no elements match the predicate; supports type guards.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 3, 5, 7]);
 * console.log(Dll.none(dll, (value) => value % 2 === 0)); // true
 * ```
 */
export function none<T, U extends T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => value is U): dll is Dll<Exclude<T, U>>
export function none<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean
export function none<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean {
    let pivot = dll.head
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) return false
        pivot = pivot.next
    }
    return true
}
