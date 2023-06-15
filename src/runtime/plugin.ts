import { defineNuxtPlugin } from '#app'
import Alert from '@/components/Alert/index.vue'
export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')
  nuxtApp.provide('Alert', Alert)
})
