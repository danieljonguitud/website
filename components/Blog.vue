<template>
  <div class="my-28 dark:text-white text-black">
    <h2 class="text-[30px] font-bold">Blog</h2>
    <div class="mt-10 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
      <div class="w-full" v-for="post in posts" :key="post.content.title">
        <nuxt-link :to="`/blog/${post.slug}`">
          <div>
            <div class="h-20 bg-cover bg-center" :style="{ backgroundImage: 'url(' + 'https://' + post.content.image + ')'}"></div>
            <h3 class="mt-5 text-[20px] font-bold">{{ post.content.title }}</h3>
            <div class="my-3 text-[16px] font-thin">{{ post.content.intro }}</div>
            <p class="font-black text-[11px] uppercase">
              Read more
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="mt-20 text-center">
      <nuxt-link to="/blog" class="font-black uppercase">View More</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    posts: {
      type: Array
    }
  },
}
</script>

<style scoped>

</style>
