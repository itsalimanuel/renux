import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
} from "@nuxt/kit";
import defaultColors from "tailwindcss/colors";
import { defaultExtractor as createDefaultExtractor } from "tailwindcss/lib/lib/defaultExtractor";

const defaultExtractor = createDefaultExtractor({
  tailwindConfig: { separator: ":" },
});

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "renux",
    configKey: "renuxUi",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
    installModule("@nuxtjs/tailwindcss", { classSuffix: "" });
    installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolver.resolve("components/**/*.{vue,mjs,ts}", "*.{mjs,js,ts}"),
          ],
        },
      },
    });
  },
});
