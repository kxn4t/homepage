export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - かなめりぜ',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'content-language', content: 'ja' },
      {
        hid: 'description',
        name: 'description',
        content:
          'かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'かなめりぜ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://kanameliser.net' },
      { hid: 'og:title', property: 'og:title', content: 'かなめりぜ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kanameliser.net/ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@kxn4t' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#89D5C9', height: '5px' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/lazyload', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-156275543-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** PWA module configuration
   ** See https://go.nuxtjs.dev/pwa
   */
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
