# lastIndexOf

```ts
function Dll.lastIndexOf(dll: Dll<T>, value: T): number
```

Returns the index of the last occurrence of a value using strict equality (===).

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 2, 4]);
console.log(Dll.lastIndexOf(dll, 2)); // 3
console.log(Dll.lastIndexOf(dll, 10)); // -1
```
