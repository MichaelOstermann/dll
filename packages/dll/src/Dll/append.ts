import type { Dll, DllLink } from "./types"

/**
 * Adds a value to the end of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>();
 * const link = Dll.append(dll, 1);
 * Dll.unlink(link);
 * ```
 */
export function append<T>(dll: Dll<T>, value: NoInfer<T>): DllLink<T> {
    const link: DllLink<T> = { next: undefined, prev: dll.tail, value }
    if (dll.tail) dll.tail.next = link
    if (!dll.head) dll.head = link
    dll.tail = link
    dll.size++
    return link
}
