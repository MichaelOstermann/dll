# at

```ts
function Dll.at(dll: Dll<T>, offset: number): DllLink<T> | undefined
```

Retrieves the link node at a specific index, supporting negative indices and optimized traversal from the nearest end.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);

const link = Dll.at(dll, 2);
console.log(link?.value); // 3

// Negative indices count from the end
const lastLink = Dll.at(dll, -1);
console.log(lastLink?.value); // 5
```
