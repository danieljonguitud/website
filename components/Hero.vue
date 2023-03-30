<template>
  <div class="sm:flex justify-between flex-row dark:text-white text-black sm:mt-10 mt-4">
    <div class="sm:w-2/5 xl:mt-12">
      <h1
        class="tracking-tight sm:text-4xl text-3xl lg:text-[41px] leading text-black font-extrabold xl:yellow-background-xl md:yellow-background-md yellow-background-xs yellow-background"
      >{{ title }}</h1>
      <p
        class="pt-10 sm:text-lg text-lg lg:text-[24px] font-thin sm:leading-loose"
      >I help businesses to build their ideas and succeed. Currently working at <a class="text-yellow underline" href="https://canadadrives.ca/" target="_blank">Canada Drives</a>.</p>
      <TechStack />
    </div>
    <Slider />
  </div>
</template>

<script>
import Slider from "~/components/Slider"
import TechStack from "~/components/TechStack";

export default {
    components: {
      TechStack,
        Slider
    },
  data() {
    return {
      title: "I'm a web developer",
      description: "I help businesses to build their ideas and succeed. Currently working with Swoon S"
    }
  },
};
</script>

<style>

</style>
