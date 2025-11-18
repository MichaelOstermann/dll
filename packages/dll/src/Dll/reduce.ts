import type { Dll, DllLink } from "."

/**
 * Reduces the list to a single value using an accumulator, traversing forward.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const sum = Dll.reduce(dll, 0, (acc, value) => acc + value);
 * ```
 */
export function reduce<T, U>(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => U,
): U {
    let pivot = dll.head
    while (pivot) {
        acc = reducer(acc, pivot.value, pivot, dll)
        pivot = pivot.next
    }
    return acc
}
