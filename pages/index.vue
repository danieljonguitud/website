<template>
  <div class="font-body bg-black flex flex-col min-h-screen">
    <div class="container mx-auto sm:px-0 px-5 flex-grow">
      <Navbar />
      <Hero />
      <Techstack />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Hero from "~/components/Hero";
import Techstack from "~/components/Techstack";
import Footer from "~/components/Footer";

export default {
  components: {
    Navbar,
    Hero,
    Techstack,
    Footer
  },
  head: {
    title: "Daniel Jonguitud | Full-Stack Developer",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
