import { defineNuxtPlugin } from "#app";
import Button from "./components/Button/index.vue";
import Avatar from "./components/Avatar/index.vue"
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Button',Button)
  nuxtApp.provide('Avatar',Avatar)
});
