import type { Dll } from "./types"

/**
 * Removes and returns the last element of the doubly-linked list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const removed = Dll.removeLast(dll);
 * ```
 */
export function removeLast<T>(dll: Dll<T>): T | undefined {
    const tail = dll.tail
    if (!tail) return undefined
    dll.tail = tail.prev
    if (tail.prev) {
        tail.prev.next = undefined
    }
    else {
        dll.head = undefined
    }
    dll.size--
    return tail.value
}
