# append

```ts
function Dll.append(dll: Dll<T>, value: T): DllLink<T>
```

Adds a value to the end of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>();
Dll.append(dll, 0);
Dll.append(dll, 1);
// List is now: [0, 1]

// The returned link can be used to unlink later
const link = Dll.append(dll, 2);
Dll.unlink(link);
// List is now: [0, 1]
```
