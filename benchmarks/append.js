import { Dll } from "@monstermann/dll"
import { tinybenchPrinter } from "@monstermann/tinybench-pretty-printer"
import { Bench } from "tinybench"

const bench = new Bench()
let dll
let arr

bench
    .add("Dsp.append(dll, number) x 1", () => {
        for (let i = 0; i < 1; i++) Dll.append(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("Dsp.append(dll, number) x 100", () => {
        for (let i = 0; i < 100; i++) Dll.append(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("Dsp.append(dll, number) x 1000", () => {
        for (let i = 0; i < 1000; i++) Dll.append(dll, i)
    }, { beforeEach: () => dll = Dll.create() })
    .add("array.push(number) x 1", () => {
        for (let i = 0; i < 1; i++) arr.push(i)
    }, { beforeEach: () => arr = [] })
    .add("array.push(number) x 100", () => {
        for (let i = 0; i < 100; i++) arr.push(i)
    }, { beforeEach: () => arr = [] })
    .add("array.push(number) x 1000", () => {
        for (let i = 0; i < 1000; i++) arr.push(i)
    }, { beforeEach: () => arr = [] })

await bench.run()
console.log(tinybenchPrinter.order(["name", "ops", "time", "margin", "samples"]).sort(false).toMarkdown(bench))
