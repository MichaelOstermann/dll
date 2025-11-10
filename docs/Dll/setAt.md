# setAt

```ts
function Dll.setAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
```

Sets the value at a specific index in the doubly-linked list, supporting negative indices.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
Dll.setAt(dll, 1, 20);
// List is now: [1, 20, 3, 4]

Dll.setAt(dll, -1, 40);
// List is now: [1, 20, 3, 40]
```
