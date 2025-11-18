import type { Dll, DllLink } from "."

/**
 * Checks if at least one element matches the predicate.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 3, 5, 8]);
 * console.log(Dll.some(dll, (value) => value % 2 === 0)); // true
 * ```
 */
export function some<T>(dll: Dll<T>, predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean): boolean {
    let pivot = dll.head
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) return true
        pivot = pivot.next
    }
    return false
}
