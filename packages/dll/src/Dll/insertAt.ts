import type { Dll, DllLink } from "./types"
import { append } from "./append"
import { at } from "./at"
import { insertBefore } from "./insertBefore"
import { prepend } from "./prepend"

/**
 * Inserts a value at a specific index in the doubly-linked list, supporting negative indices.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 4]);
 * Dll.insertAt(dll, 2, 3);
 * Dll.insertAt(dll, -1, 5);
 * ```
 */
export function insertAt<T>(dll: Dll<T>, offset: number, value: NoInfer<T>): DllLink<T> | undefined {
    const index = offset < 0 ? dll.size + offset : offset
    if (index === 0) return prepend(dll, value)
    if (index === dll.size) return append(dll, value)
    const link = at(dll, offset)
    return link ? insertBefore(dll, link, value) : undefined
}
