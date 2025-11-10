import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/dll/src/*",
    }),
    flat({
        entries: "./packages/dll/src",
        include: ["*", "Dll/index.js"],
    }),
])
