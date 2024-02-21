import { svelte } from '@sveltejs/vite-plugin-svelte';
import routify from '@roxi/routify/vite-plugin';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';
import { resolve } from 'path';
import postCssNesting from 'postcss-nesting';
import path from "path";
import legacy from "@vitejs/plugin-legacy";
import { chunk } from '@liuli-util/vite-plugin-chunk-node-modules';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
    clearScreen: false,
    resolve: {
        alias: {
            '@': resolve('src'),
            $lib: path.resolve("./src/lib"),
        }
    },
    plugins: [
        routify({
            // render: {
            //     ssr: {
            //         enable: false
            //     },
            // },
        }),
        svelte({
            // compilerOptions: {
            // dev: !production,
            // hydratable: !!process.env.ROUTIFY_SSR_ENABLE,
            // hydratable: false,
            // },
            extensions: ['.md', '.svelte'],
            preprocess: [mdsvex({ extension: 'md' })],
        }),
        // chunk(),
        //  legacy(),
    ],
    // css: { postcss: { plugins: [postCssNesting()] } },

    server: { port: 1337 },
});
