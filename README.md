# Vue 3 + TypeScript + Vite + GraphQL + Tanstack Query + Codegen

This template should help get you started developing with Vue 3, TypeScript, GraphQL, Tanstack Query, Codegen in Vite. 
The template uses Vue 3 `<script setup>` SFCs.

## Why?

I think this development pattern is easier, more readable and more intuitive than Vue-Apollo.
If you are a React developer it is much more likely that you have already used Tanstack Query, so given these reasons I set up this template.
And I also found some problems combining Apollo and Codegen.

## How to run the project

- Recommended Node 18.16.x
- `yarn`
- `yarn codegen-watch` (run it on a second terminal if you want to always run the codegen watcher)
- `yarn dev`

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## shim-vue.d.ts

This file exists because of the default method for import of Vue Components. 
Without this file you will always get an error for absolute/relative import paths.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
