import type { Dll } from "./types"
import { unlink } from "./unlink"

/**
 * Removes all elements from a doubly-linked list, clearing it completely.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * Dll.empty(dll);
 * ```
 */
export function empty<T>(dll: Dll<T>): void {
    let pivot = dll.head
    while (pivot) {
        unlink(dll, pivot)
        pivot = pivot.next
    }
}
