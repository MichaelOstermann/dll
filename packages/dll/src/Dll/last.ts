import type { Dll, DllLink } from "."

/**
 * Returns the last link node in the doubly-linked list.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3]);
 * const lastLink = Dll.last(dll);
 * console.log(lastLink?.value); // 3
 * ```
 */
export function last<T>(dll: Dll<T>): DllLink<T> | undefined {
    return dll.tail
}
