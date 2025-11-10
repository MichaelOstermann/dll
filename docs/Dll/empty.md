# empty

```ts
function Dll.empty(dll: Dll<T>): void
```

Removes all elements from a doubly-linked list, clearing it completely.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
Dll.empty(dll);
// List is now: []
```
