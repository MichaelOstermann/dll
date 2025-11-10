# entries

```ts
function Dll.entries(dll: Dll<T>): IterableIterator<DllLink<T>>
```

Returns an iterable iterator over the link nodes in the list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);

for (const link of Dll.entries(dll)) {
    console.log(link.value); // 1, 2, 3
}
```
