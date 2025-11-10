import type { Dll, DllLink } from "./types"

/**
 * Returns the index of the last element matching the predicate.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 * const index = Dll.findLastIndex(dll, (value) => value > 2);
 * ```
 */
export function findLastIndex<T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean,
): number {
    let idx = dll.size - 1
    let pivot = dll.tail
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) {
            return idx
        }
        pivot = pivot.prev
        idx--
    }
    return -1
}
