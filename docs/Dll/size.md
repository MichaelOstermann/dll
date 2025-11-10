# size

```ts
function Dll.size(dll: Dll<T>): number
```

Returns the number of elements in the doubly-linked list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
console.log(Dll.size(dll)); // 3

Dll.append(dll, 4);
console.log(Dll.size(dll)); // 4
```
