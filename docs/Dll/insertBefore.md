# insertBefore

```ts
function Dll.insertBefore(
    dll: Dll<T>,
    link: DllLink<T>,
    value: T
): DllLink<T> | undefined
```

Inserts a value immediately before a given link node.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3]);
const lastLink = Dll.last(dll)!;

Dll.insertBefore(dll, lastLink, 2);
// List is now: [1, 2, 3]
```
