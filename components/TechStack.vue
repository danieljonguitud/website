<template>
  <div class="flex sm:flex-row text-white sm:mt-6 mt-2 mb-12">
    <div class="self-center">
      <img class="sm:mr-5 sm:p-2 px-4" src="../static/laravel.png" alt width="100" />
    </div>
    <div class="self-center">
      <img class="sm:mx-5 sm:p-2 px-4" src="../static/vue-logo.png" alt width="100" />
    </div>
    <div class="self-center">
      <img v-if="this.$colorMode.value === 'dark'" class="sm:p-2 px-4" src="../static/wordpress-logo-light.png" alt width="140" />
      <img v-if="this.$colorMode.value === 'light'" class="sm:p-2 px-4" src="../static/wordpress-logo-dark.png" alt width="140" />
    </div>
  </div>
</template>
