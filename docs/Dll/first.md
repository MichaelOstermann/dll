# first

```ts
function Dll.first(dll: Dll<T>): DllLink<T> | undefined
```

Returns the first link node in the doubly-linked list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const firstLink = Dll.first(dll);
console.log(firstLink?.value); // 1
```
