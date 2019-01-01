const pkg = require('./package')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css'
      },
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],
    script: [
      { src: 'https://webapi.amap.com/maps?v=1.4.8&key=fbfea934b19ea5bb8ad1d741a5b10077' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E16B8C' },

  /*
  ** Global CSS
  */
  css: [
    {
      src: '~assets/css/global.less',
      lang: 'less'
    },
    '~assets/css/page-transletion.css',
    'highlight.js/styles/atom-one-dark-reasonable.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/vueSwiper',
      ssr: false
    },
  ],
  vendor: [
    'marked',
    'highlight.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    // '/api/': 'http://127.0.0.1:4000',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    extractCSS: { allChunks: true },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 16 // 转换基本单位
      })
    ]
  }
}
