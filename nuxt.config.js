var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  // Headers of the page
  head: {
    title: 'Hi Light Productions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lobster'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface'}
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/lightbox.js'],
  css: ['~/assets/style/app.styl'],
  modules: ['@nuxtjs/axios'],
  // Customize the progress bar color
  loading: { color: '#FF9800' },
  //Build configuration
  build: {
    //** Run ESLint on save
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    '~/api/gallery',
    '~/api/focus',
    '~/api/mail'
  ],
  axios: {
    // proxyHeaders: false
    baseURL: process.env.BASE_URL,
    browserBaseURL: process.env.BASE_URL,
    credentials: false
  }
}
