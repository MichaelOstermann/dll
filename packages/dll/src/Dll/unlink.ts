import type { Dll, DllLink } from "."

/**
 * Removes a specific link node from its doubly-linked list and clears its references.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const secondLink = Dll.at(dll, 1)!;
 * Dll.unlink(secondLink);
 * ```
 */
export function unlink<T>(dll: Dll<T>, link: DllLink<T>): void {
    if (link.prev) link.prev.next = link.next
    if (link.next) link.next.prev = link.prev
    if (dll.tail === link) dll.tail = link.prev
    if (dll.head === link) dll.head = link.next
    dll.size--
}
