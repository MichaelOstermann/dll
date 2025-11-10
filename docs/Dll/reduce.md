# reduce

```ts
function Dll.reduce(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
): U
```

Reduces the list to a single value using an accumulator, traversing forward.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
const sum = Dll.reduce(dll, 0, (acc, value) => acc + value);
console.log(sum); // 10
```
