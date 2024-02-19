import './app.pcss';
import App from './App.svelte';

new App({
  target: document.body,
  // hydrate: import.meta.env.ROUTIFY_SSR_ENABLE,
  // hydrate: false,
});
