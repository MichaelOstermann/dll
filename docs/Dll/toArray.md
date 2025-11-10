# toArray

```ts
function Dll.toArray(dll: Dll<T>): T[]
```

Converts the doubly-linked list to a standard JavaScript array.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const array = Dll.toArray(dll);
console.log(array); // [1, 2, 3]
```
