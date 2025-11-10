# find

```ts
function Dll.find(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): DllLink<T> | undefined
```

Returns the link node of the first element that matches the predicate function. Can be used with `unlink` for removal.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const link = Dll.find(dll, (value) => value > 3);
console.log(link?.value); // 4

// Use the returned link to remove it
if (link) {
    Dll.unlink(link);
}
// List is now: [1, 2, 3, 5]
```
