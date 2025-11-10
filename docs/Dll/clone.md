# clone

```ts
function Dll.clone(dll: Dll<T>): Dll<T>
```

Creates a shallow copy of the doubly-linked list with the same values.

## Example

```ts
import { Dll } from "@monstermann/dll";

const original = Dll.create<number>([1, 2, 3]);
const cloned = Dll.clone(original);

Dll.append(cloned, 4);
console.log(Dll.toArray(original)); // [1, 2, 3]
console.log(Dll.toArray(cloned)); // [1, 2, 3, 4]
```
