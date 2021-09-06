<template>
  <footer class="text-[12px] font-thin text-left w-full dark:text-gray text-black mt-20 mb-14">
    {{ year }} © Daniel Jonguitud
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  }
}
</script>

<style>
</style>
