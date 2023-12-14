// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/image", "nuxt-swiper", "vuetify-nuxt-module"],
  vuetify: {
    vuetifyOptions: {
      components: [
        "VTabs",
        "VTab",
        "VList",
        "VListItem",
        "VRadioGroup",
        "VRadio",
        "VBanner",
        "VBannerText",
      ],
    },
  },
});
