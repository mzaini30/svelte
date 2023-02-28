import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages-svelte";
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = (mangle) => (stylifyVite({
    bundles: [{
        outputFile: './src/stylify.css',
        files: ['./src/**/*.svelte'],
    }],
    compiler: {
      mangleSelectors: mangle
    }
}));

let plugins = [
  svelte(),
  pages(),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "android") {
    return {
      plugins: [legacy(), ...plugins, stylifyPlugin(false)],
    };
  } else if (mode == "online") {
    return {
      plugins: [...plugins, stylifyPlugin(true)],
    };
  } else {
    return {
      plugins: [...plugins, stylifyPlugin(false)],
    };
  }
});
