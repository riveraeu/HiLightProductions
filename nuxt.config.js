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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/lightbox.js'],
  css: ['~/assets/style/app.styl'],
  // Customize the progress bar color
  loading: { color: '#FF9800' },
  //Build configuration
  build: {
    vendor: ['axios'],
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
    '~/api'
  ],
  env: {
    cloudName: process.env.CLOUD_NAME || 'rivera-web-solutions',
    apiKey: process.env.API_KEY || '241371439292377',
    apiSecret: process.env.API_SECRET || 'xJeFn6_7_PJSGSHDLcHJi7FV30c'
}
}
