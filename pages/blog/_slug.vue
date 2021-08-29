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
    return {
      post
    }
  },
  data() {
    return {
      post: []
    }
  },
  methods: {
    getDate(date) {
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      const dateFormatted = new Date(date)
      return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()}, ${dateFormatted.getFullYear()}`
    }
  }
}
</script>

<style>
.content p {
  padding-bottom: 20px;
}
</style>
