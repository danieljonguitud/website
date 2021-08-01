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
  async asyncData(ctx) {
    const posts = await ctx.app.$axios.$get('/wp/v2/posts?per_page=4&_embed')
    return {
      posts
    }
  },
  data() {
    return {
      posts: {}
    }
  },
  head: {
    title: "Daniel Jonguitud | Web Developer",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Daniel is a Developer specialized on Web Tecnologies"
      }
    ]
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
