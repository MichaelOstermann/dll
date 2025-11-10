# none

```ts
function Dll.none(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): boolean
```

Checks if no elements match the predicate; supports type guards.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3, 5, 7]);
console.log(Dll.none(dll, (value) => value % 2 === 0)); // true

const dll2 = Dll.create<number>([1, 3, 5, 8]);
console.log(Dll.none(dll2, (value) => value % 2 === 0)); // false
```
