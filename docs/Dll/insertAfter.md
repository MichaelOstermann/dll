# insertAfter

```ts
function Dll.insertAfter(
    dll: Dll<T>,
    link: DllLink<T>,
    value: T
): DllLink<T> | undefined
```

Inserts a value immediately after a given link node.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3]);
const firstLink = Dll.first(dll)!;

Dll.insertAfter(dll, firstLink, 2);
// List is now: [1, 2, 3]
```
