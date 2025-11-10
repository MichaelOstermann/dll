# findLastIndex

```ts
function Dll.findLastIndex(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): number
```

Returns the index of the last element matching the predicate.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const index = Dll.findLastIndex(dll, (value) => value > 2);
console.log(index); // 4
```
