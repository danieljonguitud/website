<template>
  <div class="sm:flex justify-between flex-row text-white sm:mt-10 mt-4">
    <div class="sm:w-2/5 xl:mt-12">
      <h1
        class="sm:text-4xl text-3xl md:text-4xl text-black font-extrabold xl:yellow-background-xl md:yellow-background-md yellow-background-xs yellow-background"
      >{{ title }}</h1>
      <p
        class="sm:text-4xl text-3xl md:text-4xl font-thin"
      >{{ description }}</p>
    </div>
    <Slider />
  </div>
</template>

<script>
import Slider from "~/components/Slider"

export default {
    components: {
        Slider
    },
  data() {
    return {
      title: "I'm a web developer",
      description: "I help businesses to build their ideas and succeed"
    }
  },
};
</script>

<style>

</style>