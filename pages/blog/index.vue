<template>
  <div class="my-10 dark:text-white text-black">
    <div class="2xl:mx-52">
      <h1 class="text-[41px] font-extrabold">Blog</h1>
      <div class="mt-10">
        <div class="w-3/4 mt-16" v-for="post in posts" :key="post.content.title">
          <nuxt-link :to="`/blog/${post.slug}`">
            <div>
              <h2 class="mt-5 text-[20px] font-bold">{{ post.content.title }}</h2>
              <div class="my-3 text-[16px] font-thin">
                {{ post.content.intro }}
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
  async asyncData({ app }) {
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'posts/',
    })

    const posts = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date)
      return story
    })
    return {
      posts
    }
  },
  data() {
    return {
      posts: {}
    }
  },
}
</script>

<style>

</style>
