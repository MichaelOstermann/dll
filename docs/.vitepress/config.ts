import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/dll/",
    description: "Functional doubly-linked lists.",
    title: "dll",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            {
                base: "/Dll/",
                text: "Dll",
                items: [
                    { link: "append", text: "append" },
                    { link: "at", text: "at" },
                    { link: "clone", text: "clone" },
                    { link: "create", text: "create" },
                    { link: "empty", text: "empty" },
                    { link: "entries", text: "entries" },
                    { link: "every", text: "every" },
                    { link: "find", text: "find" },
                    { link: "findIndex", text: "findIndex" },
                    { link: "findLast", text: "findLast" },
                    { link: "findLastIndex", text: "findLastIndex" },
                    { link: "first", text: "first" },
                    { link: "forEach", text: "forEach" },
                    { link: "forEachRight", text: "forEachRight" },
                    { link: "includes", text: "includes" },
                    { link: "indexOf", text: "indexOf" },
                    { link: "insertAfter", text: "insertAfter" },
                    { link: "insertAt", text: "insertAt" },
                    { link: "insertBefore", text: "insertBefore" },
                    { link: "isEmpty", text: "isEmpty" },
                    { link: "last", text: "last" },
                    { link: "lastIndexOf", text: "lastIndexOf" },
                    { link: "none", text: "none" },
                    { link: "prepend", text: "prepend" },
                    { link: "reduce", text: "reduce" },
                    { link: "reduceRight", text: "reduceRight" },
                    { link: "remove", text: "remove" },
                    { link: "removeAt", text: "removeAt" },
                    { link: "removeFirst", text: "removeFirst" },
                    { link: "removeLast", text: "removeLast" },
                    { link: "setAt", text: "setAt" },
                    { link: "size", text: "size" },
                    { link: "some", text: "some" },
                    { link: "toArray", text: "toArray" },
                    { link: "unlink", text: "unlink" },
                    { link: "values", text: "values" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/dll" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
