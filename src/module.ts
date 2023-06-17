
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
  addComponent,
} from "@nuxt/kit";
import { fileURLToPath } from "url";
// Module options TypeScript interface definition
export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "renux",
    configKey: "renuxUi",
  },
  // Default configuration options of the Nuxt module
  setup(_options, nuxt) {
    // add compoeonents
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    const resolver = createResolver(import.meta.url);
    const ButtonCompoeont = resolver.resolve(runtimeDir,"components/Button")
    addComponent({
      name: "Button",
      filePath: resolver.resolve(ButtonCompoeont,"index.vue")
    })

    nuxt.options.build.transpile.push(runtimeDir)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./runtime/plugin"));
    addPlugin(resolver.resolve(runtimeDir,'plugin'))
    installModule("@nuxtjs/tailwindcss", { classSuffix: "" });
    installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolver.resolve(runtimeDir,"@/components/**/*.{vue,mjs,ts}", "*.{mjs,js,ts}"),
          ],
        },
      },
    });
    // Using the extracted defaultExtractor
    // Use defaultExtractorInstance in your code as needed
  },
});
