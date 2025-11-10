---
aside: true
---

# dll

<Badge type="info" class="size">
    <span>Minified</span>
    <span>3.58 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>1.01 KB</span>
</Badge>

**Functional doubly-linked lists.**

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

::: code-group

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

:::

## Tree-shaking

### Installation

::: code-group

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

:::

### Usage

::: code-group

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

:::

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
