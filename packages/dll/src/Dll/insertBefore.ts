import type { Dll, DllLink } from "."

/**
 * Inserts a value immediately before a given link node.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 3]);
 * const lastLink = Dll.last(dll)!;
 * Dll.insertBefore(dll, lastLink, 2);
 * ```
 */
export function insertBefore<T>(dll: Dll<T>, link: DllLink<T>, value: NoInfer<T>): DllLink<T> | undefined {
    if (!dll) return undefined
    const newLink: DllLink<T> = { next: link, prev: link.prev, value }
    if (link.prev) link.prev.next = newLink
    link.prev = newLink
    if (link === dll.head) dll.head = newLink
    dll.size++
    return newLink
}
