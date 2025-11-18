import type { Dll, DllLink } from "."

/**
 * Inserts a value immediately after a given link node.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 3]);
 * const firstLink = Dll.first(dll)!;
 * Dll.insertAfter(dll, firstLink, 2);
 * ```
 */
export function insertAfter<T>(dll: Dll<T>, link: DllLink<T>, value: NoInfer<T>): DllLink<T> | undefined {
    const newLink: DllLink<T> = { next: link.next, prev: link, value }
    if (link.next) link.next.prev = newLink
    link.next = newLink
    if (link === dll.tail) dll.tail = newLink
    dll.size++
    return newLink
}
