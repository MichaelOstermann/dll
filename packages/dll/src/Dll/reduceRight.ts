import type { Dll, DllLink } from "./types"

/**
 * Reduces the list to a single value using an accumulator, traversing backward.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const concatenated = Dll.reduceRight(dll, "", (acc, value) => acc + value);
 * ```
 */
export function reduceRight<T, U>(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => U,
): U {
    let pivot = dll.tail
    while (pivot) {
        acc = reducer(acc, pivot.value, pivot, dll)
        pivot = pivot.prev
    }
    return acc
}
