import { Dll } from "@monstermann/dll"
import { tinybenchPrinter } from "@monstermann/tinybench-pretty-printer"
import { Bench } from "tinybench"

const bench = new Bench()
let dll
let arr

bench
    .add("Dsp.prepend(dll, number) x 1", () => {
        for (let i = 0; i < 1; i++) Dll.prepend(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("Dsp.prepend(dll, number) x 100", () => {
        for (let i = 0; i < 100; i++) Dll.prepend(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("Dsp.prepend(dll, number) x 1000", () => {
        for (let i = 0; i < 1000; i++) Dll.prepend(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("array.unshift(number) x 1", () => {
        for (let i = 0; i < 1; i++) arr.unshift(i)
    }, { beforeEach: () => arr = [] })
    .add("array.unshift(number) x 100", () => {
        for (let i = 0; i < 100; i++) arr.unshift(i)
    }, { beforeEach: () => arr = [] })
    .add("array.unshift(number) x 1000", () => {
        for (let i = 0; i < 1000; i++) arr.unshift(i)
    }, { beforeEach: () => arr = [] })

await bench.run()
console.log(tinybenchPrinter.order(["name", "ops", "time", "margin", "samples"]).sort(false).toMarkdown(bench))
