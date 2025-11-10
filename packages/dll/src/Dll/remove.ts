import type { Dll } from "./types"
import { unlink } from "./unlink"

/**
 * Removes the first element in the list that matches the given value using strict equality (===).
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 2, 4]);
 * Dll.remove(dll, 2);
 * ```
 */
export function remove<T>(dll: Dll<T>, value: NoInfer<T>): void {
    let pivot = dll.head
    while (pivot) {
        if (pivot.value === value) return unlink(dll, pivot)
        pivot = pivot.next
    }
}
