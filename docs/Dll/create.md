# create

```ts
function Dll.create(entries?: T[]): Dll<T>
```

Creates a new empty doubly-linked list, optionally initializing it with an array of values.

## Example

```ts
import { Dll } from "@monstermann/dll";

// Create an empty list
const dll = Dll.create<number>();

// Create a list with initial values
const dllWithValues = Dll.create<number>([1, 2, 3]);
```
