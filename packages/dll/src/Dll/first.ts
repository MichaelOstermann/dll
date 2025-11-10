import type { Dll, DllLink } from "./types"

/**
 * Returns the first link node in the doubly-linked list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const firstLink = Dll.first(dll);
 * console.log(firstLink?.value); // 1
 * ```
 */
export function first<T>(dll: Dll<T>): DllLink<T> | undefined {
    return dll.head
}
