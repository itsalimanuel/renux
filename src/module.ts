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
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "renux",
    configKey: "renuxUi",
  },
  // Default configuration options of the Nuxt module
  setup(_options, nuxt) {
    // add compoeonents
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    const resolver = createResolver(import.meta.url);
    const AccordionComponent = resolver.resolve(
      runtimeDir,
      "components/Accordion"
    );
    const ImageToComponent = resolver.resolve(runtimeDir, "components/ImageTo");
    const LinkToComponent = resolver.resolve(runtimeDir, "components/LinkTo");
    const ButtonCompoeont = resolver.resolve(runtimeDir, "components/Button");
    const AvatarComponent = resolver.resolve(runtimeDir, "components/Avatar");
    const CascaderComponent = resolver.resolve(
      runtimeDir,
      "components/Cascader"
    );
    const AvatarGroupComponent = resolver.resolve(
      runtimeDir,
      "components/AvatarGroup"
    );
    addComponent({
      name: "Cascader",
      filePath: resolver.resolve(CascaderComponent, "index.vue"),
    });
    addComponent({
      name: "Accordion",
      filePath: resolver.resolve(AccordionComponent, "index.vue"),
    });
    addComponent({
      name: "ImageTo",
      filePath: resolver.resolve(ImageToComponent, "index.vue"),
    });
    addComponent({
      name: "Button",
      filePath: resolver.resolve(ButtonCompoeont, "index.vue"),
    });
    addComponent({
      name: "Avatar",
      filePath: resolver.resolve(AvatarComponent, "index.vue"),
    });
    addComponent({
      name: "AvatarGroup",
      filePath: resolver.resolve(AvatarGroupComponent, "index.vue"),
    });
    addComponent({
      name: "LinkTo",
      filePath: resolver.resolve(LinkToComponent, "index.vue"),
    });
    nuxt.options.build.transpile.push(runtimeDir);
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./runtime/plugin"));
    addPlugin(resolver.resolve(runtimeDir, "plugin"));
    installModule("@nuxtjs/tailwindcss", { classSuffix: "" });
    installModule("@nuxt/image");
    installModule("@nuxtjs/tailwindcss", {
      exposeConfig: true,
      config: {
        darkMode: "class",
        content: {
          files: [
            resolver.resolve(
              runtimeDir,
              "@/components/**/*.{vue,mjs,ts}",
              "*.{mjs,js,ts}"
            ),
          ],
        },
      },
    });
    // Using the extracted defaultExtractor
    // Use defaultExtractorInstance in your code as needed
  },
});
