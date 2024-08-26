// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
    "@nuxtjs/supabase"
  ],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/login',
      callback: '/',
      include: undefined,
      exclude: [
        '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
        '/course/chapter/1-chapter-1/lesson/2-typescript-in-vue-components',
        '/course/chapter/1-chapter-1/lesson/3-typing-component-events'
      ],
      cookieRedirect: false,
    }
  }
})