import type { Dll, DllLink } from "."

/**
 * Returns the link node of the last element that matches the predicate function. Can be used with `unlink` for removal.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 * const link = Dll.findLast(dll, (value) => value > 2);
 * if (link) Dll.unlink(link);
 * ```
 */
export function findLast<T, U extends T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => value is U,
): DllLink<U> | undefined

export function findLast<T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean,
): DllLink<T> | undefined

export function findLast<T>(
    dll: Dll<T>,
    predicate: (value: NoInfer<T>, link: DllLink<NoInfer<T>>, dll: Dll<NoInfer<T>>) => boolean,
): DllLink<T> | undefined {
    let pivot = dll.tail
    while (pivot) {
        if (predicate(pivot.value, pivot, dll)) {
            return pivot
        }
        pivot = pivot.prev
    }
    return undefined
}
