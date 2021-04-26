export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '活魚なみき | %s',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '阪神電鉄 西元町駅 より徒歩1分。元町商店街の6丁目。卸売りはもちろん、店内では、毎日その日に浜から仕入れた新鮮な魚を、食べやすいように調理をした上販売しております。店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高の魚を選んで参ります。',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: '活魚なみき' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://namiki.shop/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '活魚 なみき | 海産物が安くて新鮮！ 神戸市中央区の鮮魚店',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '阪神電鉄 西元町駅 より徒歩1分。元町商店街の6丁目。卸売りはもちろん、店内では、毎日その日に浜から仕入れた新鮮な魚を、食べやすいように調理をした上販売しております。店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高の魚を選んで参ります。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://namiki.shop/img/common/shop.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    'vue-burger-button/dist/vue-burger-button.css',
    '~/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-prlx.js', '~/plugins/inview.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: ['onscrollInit'],
  },
}
