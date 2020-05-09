/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  options: {
    content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
    whitelist: ['html', 'body', 'fa-']
  },
  theme: {
    colors: {
      black: '#1A1A1A',
      yellow: '#FFEBA1',
      white: '#FFFFFF',
      shadow: '#222222',
      gray: '#cbd5e0'
    },
    fontFamily: {
      'body': ['Futura PT'],
    }
  },
  variants: {},
  plugins: []
}
