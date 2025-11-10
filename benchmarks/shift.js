import { Dll } from "@monstermann/dll"
import { tinybenchPrinter } from "@monstermann/tinybench-pretty-printer"
import { Bench } from "tinybench"

const bench = new Bench()
let dll
let arr

bench
    .add("Dsp.removeFirst(dll) x 1", () => {
        for (let i = 0; i < 1; i++) Dll.removeFirst(dll)
    }, { beforeEach: () => dll = Dll.create(Array.from({ length: 1 }, (_, i) => i)) })
    .add("Dsp.removeFirst(dll) x 100", () => {
        for (let i = 0; i < 100; i++) Dll.removeFirst(dll)
    }, { beforeEach: () => dll = Dll.create(Array.from({ length: 100 }, (_, i) => i)) })
    .add("Dsp.removeFirst(dll) x 1000", () => {
        for (let i = 0; i < 1000; i++) Dll.removeFirst(dll)
    }, { beforeEach: () => dll = Dll.create(Array.from({ length: 1000 }, (_, i) => i)) })
    .add("array.shift() x 1", () => {
        for (let i = 0; i < 1; i++) arr.shift()
    }, { beforeEach: () => arr = Array.from({ length: 1 }, (_, i) => i) })
    .add("array.shift() x 100", () => {
        for (let i = 0; i < 100; i++) arr.shift()
    }, { beforeEach: () => arr = Array.from({ length: 100 }, (_, i) => i) })
    .add("array.shift() x 1000", () => {
        for (let i = 0; i < 1000; i++) arr.shift()
    }, { beforeEach: () => arr = Array.from({ length: 1000 }, (_, i) => i) })

await bench.run()
console.log(tinybenchPrinter.order(["name", "ops", "time", "margin", "samples"]).sort(false).toMarkdown(bench))
