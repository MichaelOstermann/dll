# insertAt

```ts
function Dll.insertAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
```

Inserts a value at a specific index in the doubly-linked list, supporting negative indices.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 4]);
Dll.insertAt(dll, 2, 3);
// List is now: [1, 2, 3, 4]

// Negative indices count from the end
Dll.insertAt(dll, -1, 5);
// List is now: [1, 2, 3, 5, 4]
```
