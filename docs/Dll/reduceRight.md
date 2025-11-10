# reduceRight

```ts
function Dll.reduceRight(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
): U
```

Reduces the list to a single value using an accumulator, traversing backward.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
const concatenated = Dll.reduceRight(dll, "", (acc, value) => acc + value);
console.log(concatenated); // "4321"
```
