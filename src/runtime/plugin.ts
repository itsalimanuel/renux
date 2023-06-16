import { defineNuxtPlugin } from "#app";
import Alert from "@/components/Alert/index.vue";
import Button from "@/components/Button/index.vue";
import Badge from "@/components/Badge/index.vue";
export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin injected by my-module!");
  nuxtApp.provide("alert", Alert);
  nuxtApp.provide("Button", Button);
  nuxtApp.provide("Bagde", Badge);
});
