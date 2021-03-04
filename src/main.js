import HMR from '@roxi/routify/hmr'
import App from './App.svelte'
const app = HMR(App, { target: document.body }, 'routify-app')

// const app = new App({
//   target: document.body
// })

export default app

// recreate the whole app if an HMR update touches this module
// if (import.meta.hot) {
//   import.meta.hot.dispose(() => {
//     app.$destroy()
//   })
//   import.meta.hot.accept()
// }