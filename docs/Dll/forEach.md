# forEach

```ts
function Dll.forEach(
    dll: Dll<T>,
    callback: (value: T, link: DllLink<T>, dll: Dll<T>) => void
): void
```

Executes a callback for each element in the list, traversing forward.

## Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
Dll.forEach(dll, (value, link) => {
    console.log(value); // 1, 2, 3
});
```
