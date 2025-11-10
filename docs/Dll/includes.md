# includes

```ts
function Dll.includes(dll: Dll<T>, value: T): boolean
```

Checks if the list contains a specific value using strict equality (===).

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
console.log(Dll.includes(dll, 3)); // true
console.log(Dll.includes(dll, 10)); // false
```
