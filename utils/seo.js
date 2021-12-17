export const createSEOMeta = (data) => [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'description', name: 'description', content: data.description },
  { hid: 'og:image', name: 'og:image', content: data.image }
]
