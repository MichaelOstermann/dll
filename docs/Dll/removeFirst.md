# removeFirst

```ts
function Dll.removeFirst(dll: Dll<T>): T | undefined
```

Removes and returns the first element of the doubly-linked list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const removed = Dll.removeFirst(dll);
console.log(removed); // 1
// List is now: [2, 3]
```
