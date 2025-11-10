import type { Dll } from "./types"

/**
 * Returns an iterable iterator over the values in the list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * for (const value of Dll.values(dll)) {
 *     console.log(value);
 * }
 * ```
 */
export function values<T>(dll: Dll<T>): IterableIterator<T> {
    let pivot = dll.head
    return {
        next() {
            if (pivot) {
                const result = { done: false as const, value: pivot.value }
                pivot = pivot.next
                return result
            }
            return { done: true as const, value: undefined }
        },
        [Symbol.iterator]() {
            return this
        },
    }
}
