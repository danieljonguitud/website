<template>
  <footer class="text-[12px] font-thin p-1 text-center w-full dark:bg-shadow bg-gray dark:text-gray text-black">
    {{ year }} © Daniel Jonguitud. Website built with
    <a
      class="text-yellow"
      href="http://nuxtjs.org"
      target="_blank"
    >Nuxt</a> and
    <a class="text-yellow" href="http://tailwindcss.com" target="_blank">Tailwind CCS</a>.
    Hosted on <a class="text-yellow" href="https://vercel.com/" target="_blank">Vercel</a>.
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
