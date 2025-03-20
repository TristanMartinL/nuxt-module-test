import { defineNuxtModule, createResolver, addPlugin, addComponentsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "my-module",
    configKey: "myModule"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    addComponentsDir({
      path: resolver.resolve("runtime/components")
    });
  }
});

export { module as default };
