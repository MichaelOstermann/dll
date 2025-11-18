import type { Dll, DllLink } from "."

/**
 * Executes a callback for each element in the list, traversing backward.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * Dll.forEachRight(dll, (value) => console.log(value));
 * ```
 */
export function forEachRight<T>(
    dll: Dll<T>,
    callback: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => void,
): void {
    let pivot = dll.tail
    while (pivot) {
        callback(pivot.value, pivot, dll)
        pivot = pivot.prev
    }
}
