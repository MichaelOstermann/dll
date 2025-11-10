import type { Dll } from "./types"

/**
 * Returns the number of elements in the doubly-linked list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * console.log(Dll.size(dll)); // 3
 * Dll.append(dll, 4);
 * console.log(Dll.size(dll)); // 4
 * ```
 */
export function size<T>(dll: Dll<T>): number {
    return dll.size
}
