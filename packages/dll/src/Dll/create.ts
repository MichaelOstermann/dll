import type { Dll } from "./types"
import { append } from "./append"

/**
 * Creates a new empty doubly-linked list, optionally initializing it with an array of values.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>();
 * const dllWithValues = Dll.create<number>([1, 2, 3]);
 * ```
 */
export function create<T>(entries?: T[]): Dll<T> {
    const dll: Dll<T> = {
        head: undefined,
        size: 0,
        tail: undefined,
    }

    if (entries) {
        for (const entry of entries) {
            append(dll, entry)
        }
    }

    return dll
}
