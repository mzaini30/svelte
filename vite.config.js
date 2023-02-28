import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages-svelte";
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
    bundles: [{
        outputFile: './src/stylify.css',
        files: ['./src/**/*.svelte'],
        rewriteSelectorsInFiles: false,
    }]
});

let plugins = [
  stylifyPlugin,
  svelte(),
  pages(),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "android") {
    return {
      plugins: [legacy(), ...plugins],
    };
  } else {
    return {
      plugins: [...plugins],
    };
  }
});
