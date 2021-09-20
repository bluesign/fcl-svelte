import * as fcl from "./fcl.js";
import App from "./App.svelte";
window.global = window 
const app = new App({
  target: document.body
});

export default app;
