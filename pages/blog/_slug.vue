<template>
  <div class="2xl:mx-52 mx-0">
    <h1 class="md:text-[54px] text-[48px] font-extrabold mb-10">{{post.content.title}}</h1>
    <div class="h-80 bg-cover bg-center" :style="{ backgroundImage: 'url(' + 'https://' + post.content.image + ')'}"></div>
    <div class="text-right my-10">
      <span class="text-[16px]">{{ getDate(post.content.date) }}</span>
    </div>
      <div v-html="getRichText(post.content.long_text)" class="content font-thin text-[21px]">
      </div>
    <div class="flex justify-center text-center mt-20">
      <span class="text-2xl font-bold pr-10">Follow me</span>
      <a class="text-2xl pr-10" href="https://twitter.com/danojonguitud" target="_blank">
        <fa
          class="hover:text-yellow transition-colors duration-150 ease-in-out"
          :icon="['fab', 'twitter']"
        />
      </a>
      <a class="text-2xl" href="https://instagram.com/danojonguitud" target="_blank">
        <fa
          class="hover:text-yellow transition-colors duration-150 ease-in-out"
          :icon="['fab', 'instagram']"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { createSEOMeta } from "~/utils/seo";

export default {
  async asyncData({ app, route }) {
    // Get the slug from the route
    const slug = route.params.slug

    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'posts/',
      by_slugs: '*/' + slug,
    })

    const post = res.data.stories[0]

    return {
      post,
    }
  },
  data() {
    return {
      post: [],
    }
  },
  methods: {
    getDate(date) {
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
      const dateFormatted = new Date(date)
      return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()}, ${dateFormatted.getFullYear()}`
    },
    getRichText(text) {
      return this.$storyapi.richTextResolver.render(text)
    }
  },
  head() {
    const { title, description } = this.post.content
    const image = 'https://' + this.post.content.image
    return {
      title: `${title} | Daniel Jonguitud`,
      meta: createSEOMeta({ description, image }),
    }
  },
}
</script>

<style>
.content p {
  padding-bottom: 20px;
}
</style>
