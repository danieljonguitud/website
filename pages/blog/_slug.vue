<template>
  <div class="2xl:mx-52 mx-0">
    <h1 class="md:text-[54px] text-[48px] font-extrabold mb-10">{{post[0].title.rendered}}</h1>
    <div class="h-80 bg-cover bg-center" :style="{ backgroundImage: 'url(' + post[0]._embedded['wp:featuredmedia'][0].source_url + ')'}"></div>
    <div class="text-right my-10">
      <span class="text-[16px]">{{ getDate(post[0].date) }}</span>
    </div>
      <div v-html="post[0].content.rendered" class="content leading-8 font-thin text-lg">
      </div>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    const slug = ctx.params.slug
    const post = await ctx.app.$axios.$get(`/wp/v2/posts?slug=${slug}&_embed`)
    const seo = post[0].yoast_head_json
    return {
      post,
      seo
    }
  },
  data() {
    return {
      post: [],
      seo: [],
    }
  },
  methods: {
    getDate(date) {
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      const dateFormatted = new Date(date)
      return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()}, ${dateFormatted.getFullYear()}`
    }
  },
  head() {
    return {
      title: this.seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.seo.og_description },
        { hid: 'og:image', name: 'og:image', content: this.seo.og_image[0].url}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ]
    }
  },
}
</script>

<style>
.content p {
  padding-bottom: 20px;
}
</style>
