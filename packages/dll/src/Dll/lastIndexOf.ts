import type { Dll } from "./types"

/**
 * Returns the index of the last occurrence of a value using strict equality (===).
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 2, 4]);
 * console.log(Dll.lastIndexOf(dll, 2)); // 3
 * console.log(Dll.lastIndexOf(dll, 10)); // -1
 * ```
 */
export function lastIndexOf<T>(dll: Dll<T>, value: NoInfer<T>): number {
    let idx = dll.size - 1
    let pivot = dll.tail
    while (pivot) {
        if (pivot.value === value) return idx
        pivot = pivot.prev
        idx--
    }
    return -1
}
