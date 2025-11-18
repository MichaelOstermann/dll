import type { Dll } from "."

/**
 * Converts the doubly-linked list to a standard JavaScript array.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const array = Dll.toArray(dll);
 * ```
 */
export function toArray<T>(dll: Dll<T>): T[] {
    const result: T[] = []
    let pivot = dll.head
    while (pivot) {
        result.push(pivot.value)
        pivot = pivot.next
    }
    return result
}
