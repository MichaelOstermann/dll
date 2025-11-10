# values

```ts
function Dll.values(dll: Dll<T>): IterableIterator<T>
```

Returns an iterable iterator over the values in the list.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);

for (const value of Dll.values(dll)) {
    console.log(value); // 1, 2, 3
}
```
