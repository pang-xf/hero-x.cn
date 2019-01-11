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
      {
        rel: 'stylesheet',
        type:'text/css',
        href:'http://cdn.webfont.youziku.com/webfonts/nomal/126872/29782/5c384b62f629d808f030e494.css'
      }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],
    script: [
      { src: 'https://webapi.amap.com/maps?v=1.4.8&key=fbfea934b19ea5bb8ad1d741a5b10077' },
      { src: 'https://xhangjia.oss-cn-shenzhen.aliyuncs.com/2018/12/change/webfont.js' },
      // { src: 'http://cdn.webfont.youziku.com/wwwroot/js/wf/youziku.api.min.js' },
      {
        innerHTML: `
        $youziku.load("body", "c7d2d4367c844c95b1d7ebf7c25a8e53", "LiDeBiao-Xing3");
          $youziku.draw();
        `
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
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
  router: {
    linkActiveClass: 'active-link'
  },
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
    extractCSS: { allChunks: true }
  }
}
