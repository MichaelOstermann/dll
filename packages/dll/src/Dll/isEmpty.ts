import type { Dll } from "."

/**
 * Checks if the doubly-linked list is empty.
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>();
 * console.log(Dll.isEmpty(dll)); // true
 * Dll.append(dll, 1);
 * console.log(Dll.isEmpty(dll)); // false
 * ```
 */
export function isEmpty<T>(dll: Dll<T>): boolean {
    return dll.size === 0
}
