import { defineNuxtPlugin } from "#app";
import Button from "./components/Button/index.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Button',Button)
});
