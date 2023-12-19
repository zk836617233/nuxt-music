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
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  routeRules: {
    "/mv/**": { ssr: false },
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
      theme: {
        defaultTheme: "dark",
      },
    },
  },
});
