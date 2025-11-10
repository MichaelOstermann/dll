# last

```ts
function Dll.last(dll: Dll<T>): DllLink<T> | undefined
```

Returns the last link node in the doubly-linked list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const lastLink = Dll.last(dll);
console.log(lastLink?.value); // 3
```
