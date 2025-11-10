import type { Dll } from "./types"
import { append } from "./append"
import { create } from "./create"

/**
 * Creates a shallow copy of the doubly-linked list with the same values.
 *
 * @example
 * ```ts
 * const original = Dll.create<number>([1, 2, 3]);
 * const cloned = Dll.clone(original);
 * Dll.append(cloned, 4);
 * ```
 */
export function clone<T>(dll: Dll<T>): Dll<T> {
    const copy = create<T>()
    let pivot = dll.head
    while (pivot) {
        append(copy, pivot.value)
        pivot = pivot.next
    }
    return copy
}
