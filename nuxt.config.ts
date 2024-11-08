// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
  ],

  /**
   * Shadcn module options
   * https://www.shadcn-vue.com/docs/installation/nuxt.html
   */
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "Ui",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  /**
   * Color mode module options
   * https://color-mode.nuxtjs.org/
   */
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  ssr: false,

  /**
   * Nuxt to pre-render images
   * https://image.nuxt.com/advanced/static-images
   */
  nitro: {
    prerender: {
      routes: [

      ],
    },
  },

  /**
   * Nuxt Auto Import
   */
  imports: {
    dirs: [
      "lib",
    ],
  },
});
