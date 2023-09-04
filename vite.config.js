import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import legacy from "@vitejs/plugin-legacy";
import pages from "vite-plugin-pages-svelte";
import uno_css from "unocss/vite";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformer_directives from "@unocss/transformer-directives";

let plugins = [
  svelte(),
  pages(),
  uno_css({
    // ...
    transformers: [transformerVariantGroup(), transformer_directives()],
  }),
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
