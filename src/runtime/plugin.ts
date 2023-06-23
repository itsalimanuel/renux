import { defineNuxtPlugin } from "#app";
import Button from "./components/Button/index.vue";
import Avatar from "./components/Avatar/index.vue";
import AvatarGroup from "./components/AvatarGroup/index.vue";
import LinkTo from "./components/LinkTo/index.vue";
import ImageTo from "./components/ImageTo/index.vue";
import Accordion from "./components/Accordion/index.vue";
import Cascader from "./components/Cascader/index.vue";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("Button", Button);
  nuxtApp.provide("Avatar", Avatar);
  nuxtApp.provide("avatar-group", AvatarGroup);
  nuxtApp.provide("Link-To", LinkTo);
  nuxtApp.provide("Image-To", ImageTo);
  nuxtApp.provide("Accordion", Accordion);
  nuxtApp.provide("Cascader", Cascader);
});
