<template>
  <div>
      <Hero />
      <Blog :posts="posts" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import Blog from "~/components/Blog";

export default {
  components: {
    Blog,
    Navbar,
    Hero,
    Footer
  },
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
  layout: 'default'
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
