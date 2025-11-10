# unlink

```ts
function Dll.unlink(link: DllLink<T>): void
```

Removes a specific link node from its doubly-linked list and clears its references.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const secondLink = Dll.at(dll, 1)!;

Dll.unlink(secondLink);
// List is now: [1, 3]
```
