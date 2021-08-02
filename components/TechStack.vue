<template>
  <div class="flex sm:flex-row sm:justify-start justify-center text-white sm:mt-6 mt-2 mb-12">
    <div class="self-center">
      <img class="md:mr-5 md:p-2 px-4" src="../static/laravel.png" alt="Laravel Logo" width="100" />
    </div>
    <div class="self-center">
      <img class="md:mx-5 md:p-2 px-4" src="../static/vue-logo.png" alt="Vue Logo" width="100" />
    </div>
    <div class="self-center">
      <img v-if="this.$colorMode.value === 'dark'" class="md:p-2 px-4" src="../static/wordpress-logo-light.png" alt="WordPress White Logo" width="140" />
      <img v-if="this.$colorMode.value === 'light'" class="md:p-2 px-4" src="../static/wordpress-logo-dark.png" alt="WordPress Black Logo" width="140" />
    </div>
  </div>
</template>
