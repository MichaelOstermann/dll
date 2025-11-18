import type { Dll } from "."
import { at } from "./at"
import { unlink } from "./unlink"

/**
 * Removes and returns the element at a specific index, supporting negative indices.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4]);
 * const removed = Dll.removeAt(dll, 1);
 * const lastRemoved = Dll.removeAt(dll, -1);
 * ```
 */
export function removeAt<T>(dll: Dll<T>, offset: number): T | undefined {
    const link = at(dll, offset)
    if (link) unlink(dll, link)
    return link?.value
}
