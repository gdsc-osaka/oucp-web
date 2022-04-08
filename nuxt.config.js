// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/oupc-web/',
        },
      }
    : {}
const faviconPath =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/oupc-web/favicon.ico'
    : '/favicon.ico'

export default {
  ...routerBase,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - OUCP',
    title: '大阪大学応援団新歓ページ',
    htmlAttrs: {
      lang: 'jp',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '大阪大学応援団の新歓ホームページです。活動内容や新歓情報、部員紹介、よくある質問などの新入生の皆さんに役立つ情報を掲載しています！',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'nuxtjs,web',
      },

      { hid: 'og:site_name', property: 'og:site_name', content: 'OUPC' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://gdsc-osaka.github.io/oupc-web/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '大阪大学応援団新歓ページ2022',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '大阪大学応援団の新歓ホームページです。活動内容や新歓情報、部員紹介、よくある質問などの新入生の皆さんに役立つ情報を掲載しています！',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://gdsc-osaka.github.io/oupc-web//ouen.JPG',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@GDSC_osaka' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: faviconPath }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/gonuxt/components/atoms/',
      '~/gonuxt/components/molecules',
      '~/gonuxt/components/organisms',
      '~/components',
      '~/components/molecules',
      '~/sections/',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@/modules/custom-generate.js', 'nuxt-webfontloader'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/app.scss'],
    theme: {
      themes: {
        light: {
          primary: '#0d47a1',
          secondary: '#039be5',
          complement: '#ffcc45',
          analogous: '#0c7e89',
          tiadic: '#a10d48',

          accent: '#e84435',
          warning: '#fbbc04',
          success: '#0f9d58',
        },
      },
    },
  },

  webfontloader: {
    google: {
      families: ['Zen+Maru+Gothic:700,900', 'Kiwi+Maru:500'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
