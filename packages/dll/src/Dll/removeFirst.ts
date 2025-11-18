import type { Dll } from "."

/**
 * Removes and returns the first element of the doubly-linked list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const removed = Dll.removeFirst(dll);
 * ```
 */
export function removeFirst<T>(dll: Dll<T>): T | undefined {
    const head = dll.head
    if (!head) return undefined
    dll.head = head.next
    if (head.next) {
        head.next.prev = undefined
    }
    else {
        dll.tail = undefined
    }
    dll.size--
    return head.value
}
