import type { Dll, DllLink } from "./types"

/**
 * Executes a callback for each element in the list, traversing forward.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * Dll.forEach(dll, (value) => console.log(value));
 * ```
 */
export function forEach<T>(
    dll: Dll<T>,
    callback: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => void,
): void {
    let pivot = dll.head
    while (pivot) {
        callback(pivot.value, pivot, dll)
        pivot = pivot.next
    }
}
