import type { Dll } from "."
import { indexOf } from "./indexOf"

/**
 * Checks if the list contains a specific value using strict equality (===).
 *
 * @example
 * ```ts
 * const dll = Dll.create<number>([1, 2, 3, 4, 5]);
 * console.log(Dll.includes(dll, 3)); // true
 * console.log(Dll.includes(dll, 10)); // false
 * ```
 */
export function includes<T>(dll: Dll<T>, value: NoInfer<T>): boolean {
    return indexOf(dll, value) > -1
}
