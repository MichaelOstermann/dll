<div align="center">

<h1>dll</h1>

![Minified](https://img.shields.io/badge/Minified-3.58_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-1.01_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional doubly-linked lists.**

[Documentation](https://MichaelOstermann.github.io/dll)

</div>

## Example

```ts
import { Dll } from "@monstermann/dll";

// Create a doubly-linked list
const dll = Dll.create<number>([1, 2, 3]);

// Add elements
const linkA = Dll.append(dll, 4);
const linkB = Dll.prepend(dll, 0);

// Access elements
console.log(Dll.first(dll)?.value); // 0
console.log(Dll.last(dll)?.value); // 4

// Remove elements
Dll.unlink(dll, linkA);
Dll.unlink(dll, linkB);
```

## Installation

```sh [npm]
npm install @monstermann/dll
```

```sh [pnpm]
pnpm add @monstermann/dll
```

```sh [yarn]
yarn add @monstermann/dll
```

```sh [bun]
bun add @monstermann/dll
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-dll
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-dll
```

```sh [yarn]
yarn -D add @monstermann/unplugin-dll
```

```sh [bun]
bun -D add @monstermann/unplugin-dll
```

### Usage

```ts [Vite]
// vite.config.ts
import dll from "@monstermann/unplugin-dll/vite";

export default defineConfig({
    plugins: [dll()],
});
```

```ts [Rollup]
// rollup.config.js
import dll from "@monstermann/unplugin-dll/rollup";

export default {
    plugins: [dll()],
};
```

```ts [Rolldown]
// rolldown.config.js
import dll from "@monstermann/unplugin-dll/rolldown";

export default {
    plugins: [dll()],
};
```

```ts [Webpack]
// webpack.config.js
const dll = require("@monstermann/unplugin-dll/webpack");

module.exports = {
    plugins: [dll()],
};
```

```ts [Rspack]
// rspack.config.js
const dll = require("@monstermann/unplugin-dll/rspack");

module.exports = {
    plugins: [dll()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import dll from "@monstermann/unplugin-dll/esbuild";

build({
    plugins: [dll()],
});
```

## Benchmarks

- Runtime: Node v25.1.0
- CPU: AMD Ryzen 9 7900 12-Core

| name                            | ops/sec | time/op | margin | samples |
| ------------------------------- | ------: | ------: | :----: | ------: |
| Dsp.prepend(dll, number) x 1    |     40M |    26ns | ±0.10% |     38M |
| Dsp.prepend(dll, number) x 100  |      4M |   335ns | ±1.84% |      3M |
| Dsp.prepend(dll, number) x 1000 |    364K |     3µs | ±6.71% |    340K |
| array.unshift(number) x 1       |     16M |    62ns | ±0.07% |     16M |
| array.unshift(number) x 100     |    503K |     2µs | ±0.13% |    498K |
| array.unshift(number) x 1000    |     24K |    42µs | ±0.27% |     24K |

| name                        | ops/sec | time/op | margin | samples |
| --------------------------- | ------: | ------: | :----: | ------: |
| Dsp.removeFirst(dll) x 1    |     40M |    26ns | ±0.06% |     39M |
| Dsp.removeFirst(dll) x 100  |      5M |   214ns | ±0.07% |      5M |
| Dsp.removeFirst(dll) x 1000 |    455K |     2µs | ±0.09% |    453K |
| array.shift() x 1           |     36M |    28ns | ±0.07% |     35M |
| array.shift() x 100         |    961K |     1µs | ±0.07% |    951K |
| array.shift() x 1000        |     44K |    23µs | ±0.09% |     44K |

| name                           | ops/sec | time/op | margin | samples |
| ------------------------------ | ------: | ------: | :----: | ------: |
| Dsp.append(dll, number) x 1    |     40M |    26ns | ±0.13% |     38M |
| Dsp.append(dll, number) x 100  |      4M |   309ns | ±0.37% |      3M |
| Dsp.append(dll, number) x 1000 |    363K |     3µs | ±6.59% |    340K |
| array.push(number) x 1         |     38M |    28ns | ±0.04% |     36M |
| array.push(number) x 100       |      6M |   201ns | ±0.30% |      5M |
| array.push(number) x 1000      |    307K |     3µs | ±5.93% |    289K |

| name                       | ops/sec | time/op | margin | samples |
| -------------------------- | ------: | ------: | :----: | ------: |
| Dsp.removeLast(dll) x 1    |     40M |    26ns | ±0.13% |     38M |
| Dsp.removeLast(dll) x 100  |      5M |   214ns | ±0.05% |      5M |
| Dsp.removeLast(dll) x 1000 |    477K |     2µs | ±0.08% |    475K |
| array.pop() x 1            |     41M |    25ns | ±0.05% |     40M |
| array.pop() x 100          |     13M |    79ns | ±0.05% |     13M |
| array.pop() x 1000         |      2M |   586ns | ±0.08% |      2M |

## Dll

### append

```ts
function Dll.append(dll: Dll<T>, value: T): DllLink<T>
```

Adds a value to the end of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>();
Dll.append(dll, 0);
Dll.append(dll, 1);
// List is now: [0, 1]

// The returned link can be used to unlink later
const link = Dll.append(dll, 2);
Dll.unlink(link);
// List is now: [0, 1]
```

### at

```ts
function Dll.at(dll: Dll<T>, offset: number): DllLink<T> | undefined
```

Retrieves the link node at a specific index, supporting negative indices and optimized traversal from the nearest end.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);

const link = Dll.at(dll, 2);
console.log(link?.value); // 3

// Negative indices count from the end
const lastLink = Dll.at(dll, -1);
console.log(lastLink?.value); // 5
```

### clone

```ts
function Dll.clone(dll: Dll<T>): Dll<T>
```

Creates a shallow copy of the doubly-linked list with the same values.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const original = Dll.create<number>([1, 2, 3]);
const cloned = Dll.clone(original);

Dll.append(cloned, 4);
console.log(Dll.toArray(original)); // [1, 2, 3]
console.log(Dll.toArray(cloned)); // [1, 2, 3, 4]
```

### create

```ts
function Dll.create(entries?: T[]): Dll<T>
```

Creates a new empty doubly-linked list, optionally initializing it with an array of values.

#### Example

```ts
import { Dll } from "@monstermann/dll";

// Create an empty list
const dll = Dll.create<number>();

// Create a list with initial values
const dllWithValues = Dll.create<number>([1, 2, 3]);
```

### empty

```ts
function Dll.empty(dll: Dll<T>): void
```

Removes all elements from a doubly-linked list, clearing it completely.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
Dll.empty(dll);
// List is now: []
```

### entries

```ts
function Dll.entries(dll: Dll<T>): IterableIterator<DllLink<T>>
```

Returns an iterable iterator over the link nodes in the list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);

for (const link of Dll.entries(dll)) {
    console.log(link.value); // 1, 2, 3
}
```

### every

```ts
function Dll.every(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): boolean
```

Checks if all elements match the predicate; supports type guards.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([2, 4, 6, 8]);
console.log(Dll.every(dll, (value) => value % 2 === 0)); // true

const dll2 = Dll.create<number>([1, 2, 3, 4]);
console.log(Dll.every(dll2, (value) => value % 2 === 0)); // false
```

### find

```ts
function Dll.find(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): DllLink<T> | undefined
```

Returns the link node of the first element that matches the predicate function. Can be used with `unlink` for removal.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const link = Dll.find(dll, (value) => value > 3);
console.log(link?.value); // 4

// Use the returned link to remove it
if (link) {
    Dll.unlink(link);
}
// List is now: [1, 2, 3, 5]
```

### findIndex

```ts
function Dll.findIndex(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): number
```

Returns the index of the first element matching the predicate.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const index = Dll.findIndex(dll, (value) => value > 3);
console.log(index); // 3
```

### findLast

```ts
function Dll.findLast(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): DllLink<T> | undefined
```

Returns the link node of the last element that matches the predicate function. Can be used with `unlink` for removal.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const link = Dll.findLast(dll, (value) => value > 2);
console.log(link?.value); // 5

// Use the returned link to remove it
if (link) {
    Dll.unlink(link);
}
// List is now: [1, 2, 3, 4]
```

### findLastIndex

```ts
function Dll.findLastIndex(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): number
```

Returns the index of the last element matching the predicate.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
const index = Dll.findLastIndex(dll, (value) => value > 2);
console.log(index); // 4
```

### first

```ts
function Dll.first(dll: Dll<T>): DllLink<T> | undefined
```

Returns the first link node in the doubly-linked list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const firstLink = Dll.first(dll);
console.log(firstLink?.value); // 1
```

### forEach

```ts
function Dll.forEach(
    dll: Dll<T>,
    callback: (value: T, link: DllLink<T>, dll: Dll<T>) => void
): void
```

Executes a callback for each element in the list, traversing forward.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
Dll.forEach(dll, (value, link) => {
    console.log(value); // 1, 2, 3
});
```

### forEachRight

```ts
function Dll.forEachRight(
    dll: Dll<T>,
    callback: (value: T, link: DllLink<T>, dll: Dll<T>) => void
): void
```

Executes a callback for each element in the list, traversing backward.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
Dll.forEachRight(dll, (value, link) => {
    console.log(value); // 3, 2, 1
});
```

### includes

```ts
function Dll.includes(dll: Dll<T>, value: T): boolean
```

Checks if the list contains a specific value using strict equality (===).

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4, 5]);
console.log(Dll.includes(dll, 3)); // true
console.log(Dll.includes(dll, 10)); // false
```

### indexOf

```ts
function Dll.indexOf(dll: Dll<T>, value: T): number
```

Returns the index of the first occurrence of a value using strict equality (===).

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 2, 4]);
console.log(Dll.indexOf(dll, 2)); // 1
console.log(Dll.indexOf(dll, 10)); // -1
```

### insertAfter

```ts
function Dll.insertAfter(
    dll: Dll<T>,
    link: DllLink<T>,
    value: T
): DllLink<T> | undefined
```

Inserts a value immediately after a given link node.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3]);
const firstLink = Dll.first(dll)!;

Dll.insertAfter(dll, firstLink, 2);
// List is now: [1, 2, 3]
```

### insertAt

```ts
function Dll.insertAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
```

Inserts a value at a specific index in the doubly-linked list, supporting negative indices.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 4]);
Dll.insertAt(dll, 2, 3);
// List is now: [1, 2, 3, 4]

// Negative indices count from the end
Dll.insertAt(dll, -1, 5);
// List is now: [1, 2, 3, 5, 4]
```

### insertBefore

```ts
function Dll.insertBefore(
    dll: Dll<T>,
    link: DllLink<T>,
    value: T
): DllLink<T> | undefined
```

Inserts a value immediately before a given link node.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3]);
const lastLink = Dll.last(dll)!;

Dll.insertBefore(dll, lastLink, 2);
// List is now: [1, 2, 3]
```

### isEmpty

```ts
function Dll.isEmpty(dll: Dll<T>): boolean
```

Checks if the doubly-linked list is empty.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>();
console.log(Dll.isEmpty(dll)); // true

Dll.append(dll, 1);
console.log(Dll.isEmpty(dll)); // false
```

### last

```ts
function Dll.last(dll: Dll<T>): DllLink<T> | undefined
```

Returns the last link node in the doubly-linked list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const lastLink = Dll.last(dll);
console.log(lastLink?.value); // 3
```

### lastIndexOf

```ts
function Dll.lastIndexOf(dll: Dll<T>, value: T): number
```

Returns the index of the last occurrence of a value using strict equality (===).

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 2, 4]);
console.log(Dll.lastIndexOf(dll, 2)); // 3
console.log(Dll.lastIndexOf(dll, 10)); // -1
```

### none

```ts
function Dll.none(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): boolean
```

Checks if no elements match the predicate; supports type guards.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3, 5, 7]);
console.log(Dll.none(dll, (value) => value % 2 === 0)); // true

const dll2 = Dll.create<number>([1, 3, 5, 8]);
console.log(Dll.none(dll2, (value) => value % 2 === 0)); // false
```

### prepend

```ts
function Dll.prepend(dll: Dll<T>, value: T): DllLink<T>
```

Adds a value to the beginning of the doubly-linked list. Returns the link node, which can be used with `unlink` for later removal.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>();
Dll.prepend(dll, 1);
Dll.prepend(dll, 0);
// List is now: [0, 1]

// The returned link can be used to unlink later
const link = Dll.prepend(dll, -1);
Dll.unlink(link);
// List is now: [0, 1]
```

### reduce

```ts
function Dll.reduce(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
): U
```

Reduces the list to a single value using an accumulator, traversing forward.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
const sum = Dll.reduce(dll, 0, (acc, value) => acc + value);
console.log(sum); // 10
```

### reduceRight

```ts
function Dll.reduceRight(
    dll: Dll<T>,
    acc: U,
    reducer: (acc: U, value: T, link: DllLink<T>, dll: Dll<T>) => U
): U
```

Reduces the list to a single value using an accumulator, traversing backward.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
const concatenated = Dll.reduceRight(dll, "", (acc, value) => acc + value);
console.log(concatenated); // "4321"
```

### remove

```ts
function Dll.remove(dll: Dll<T>, value: T): void
```

Removes the first element in the list that matches the given value using strict equality (===).

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 2, 4]);
Dll.remove(dll, 2);
// List is now: [1, 3, 2, 4] (only first match removed)
```

### removeAt

```ts
function Dll.removeAt(dll: Dll<T>, offset: number): T | undefined
```

Removes and returns the element at a specific index, supporting negative indices.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
const removed = Dll.removeAt(dll, 1);
console.log(removed); // 2
// List is now: [1, 3, 4]

const lastRemoved = Dll.removeAt(dll, -1);
console.log(lastRemoved); // 4
```

### removeFirst

```ts
function Dll.removeFirst(dll: Dll<T>): T | undefined
```

Removes and returns the first element of the doubly-linked list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const removed = Dll.removeFirst(dll);
console.log(removed); // 1
// List is now: [2, 3]
```

### removeLast

```ts
function Dll.removeLast(dll: Dll<T>): T | undefined
```

Removes and returns the last element of the doubly-linked list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const removed = Dll.removeLast(dll);
console.log(removed); // 3
// List is now: [1, 2]
```

### setAt

```ts
function Dll.setAt(dll: Dll<T>, offset: number, value: T): DllLink<T> | undefined
```

Sets the value at a specific index in the doubly-linked list, supporting negative indices.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3, 4]);
Dll.setAt(dll, 1, 20);
// List is now: [1, 20, 3, 4]

Dll.setAt(dll, -1, 40);
// List is now: [1, 20, 3, 40]
```

### size

```ts
function Dll.size(dll: Dll<T>): number
```

Returns the number of elements in the doubly-linked list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
console.log(Dll.size(dll)); // 3

Dll.append(dll, 4);
console.log(Dll.size(dll)); // 4
```

### some

```ts
function Dll.some(
    dll: Dll<T>,
    predicate: (value: T, link: DllLink<T>, dll: Dll<T>) => boolean
): boolean
```

Checks if at least one element matches the predicate.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 3, 5, 8]);
console.log(Dll.some(dll, (value) => value % 2 === 0)); // true

const dll2 = Dll.create<number>([1, 3, 5, 7]);
console.log(Dll.some(dll2, (value) => value % 2 === 0)); // false
```

### toArray

```ts
function Dll.toArray(dll: Dll<T>): T[]
```

Converts the doubly-linked list to a standard JavaScript array.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const array = Dll.toArray(dll);
console.log(array); // [1, 2, 3]
```

### unlink

```ts
function Dll.unlink(link: DllLink<T>): void
```

Removes a specific link node from its doubly-linked list and clears its references.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);
const secondLink = Dll.at(dll, 1)!;

Dll.unlink(secondLink);
// List is now: [1, 3]
```

### values

```ts
function Dll.values(dll: Dll<T>): IterableIterator<T>
```

Returns an iterable iterator over the values in the list.

#### Example

```ts
import { Dll } from "@monstermann/dll";

const dll = Dll.create<number>([1, 2, 3]);

for (const value of Dll.values(dll)) {
    console.log(value); // 1, 2, 3
}
```
