# indexOf

```ts
function Dll.indexOf(dll: Dll<T>, value: T): number
```

Returns the index of the first occurrence of a value using strict equality (===).

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 2, 4]);
console.log(Dll.indexOf(dll, 2)); // 1
console.log(Dll.indexOf(dll, 10)); // -1
```
