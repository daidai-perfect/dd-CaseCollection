
module.exports = {
  mode: "universal",
  router: {
    middleware: "i18n"
  },
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/bitbug_favicon.ico" },
      { rel: "stylesheet", href: "/css/animate.css"}
    ],
    // script: [
    //   {
    //     src: "/js/iconfont.js"
    //   },
    //   {
    //     src: "/js/tronweb.js"
    //   }
    // ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/css/main.scss", 'swiper/dist/css/swiper.css',],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/i18n.js",
    {src:'~plugins/swiper.js',ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  // modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   "/baseapi": {
  //     target: "https://tronsage.bitank.com",
  //     pathRewrite: {
  //       "^/baseapi": "/"
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
