# removeLast

```ts
function Dll.removeLast(dll: Dll<T>): T | undefined
```

Removes and returns the last element of the doubly-linked list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const removed = Dll.removeLast(dll);
console.log(removed); // 3
// List is now: [1, 2]
```
