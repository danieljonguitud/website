<template>
  <div class="my-10 dark:text-white text-black">
    <div class="2xl:mx-52">
      <h1 class="text-[41px] font-extrabold">Blog</h1>
      <div class="mt-10">
        <div class="w-3/4 mt-16" v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/blog/${post.slug}`">
            <div>
              <h2 class="mt-5 text-[20px] font-bold">{{ post.title.rendered }}</h2>
              <div v-html="post.excerpt.rendered" class="my-3 text-[16px] font-thin">
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData(ctx) {
    const posts = await ctx.app.$axios.$get('/wp/v2/posts?_embed')
    return {
      posts
    }
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>

<style>

</style>
