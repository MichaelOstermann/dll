import type { Dll, DllLink } from "./types"

/**
 * Adds a value to the beginning of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>();
 * const link = Dll.prepend(dll, 1);
 * Dll.unlink(link);
 * ```
 */
export function prepend<T>(dll: Dll<T>, value: NoInfer<T>): DllLink<T> {
    const link: DllLink<T> = { next: dll.head, prev: undefined, value }
    if (dll.head) dll.head.prev = link
    if (!dll.tail) dll.tail = link
    dll.head = link
    dll.size++
    return link
}
