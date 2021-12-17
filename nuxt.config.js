export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Daniel Jonguitud | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I\'m an SWE specialized in Web Technologies. My passion about web have enabled me with to know great solutions for business. I\'m a strong believer that everything is possible as long as we use the correct tools.' },
      { hid: 'og:image', name: 'og:image', content: 'https://images.unsplash.com/photo-1548588627-f978862b85e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Customize the transition effect
  */
  // pageTransition: 'fade',
  /*
  ** Global CSS
  */
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    '~/assets/css/main.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [['faGithub'], ['faLinkedin'], ['faWhatsapp'], ['faTwitter'], ['faInstagram']]
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [['faEnvelope'], ['faSun'], ['faMoon']]
        },
      ]
    }],
    // Doc: https://github.com/storyblok/storyblok-nuxt
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ],

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://wp.danieljonguitud.com/wp-json'
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  /*
  ** Build configuration
  */
  build: {},
}
