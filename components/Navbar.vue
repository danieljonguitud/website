<template>
  <nav class="flex flex-row justify-between text-white font-thin sm:py-10 py-10">
    <div>
      <img src="../static/logo-fit-white.png" alt="Daniel Jonguitud Logo" width="100" height="100" />
    </div>
    <div class="text-lg self-center hidden md:block">
      <nuxt-link class="mr-10 link" to="backend">Backend</nuxt-link>
      <nuxt-link class="mr-10 link" to>Frontend</nuxt-link>
      <nuxt-link class="mr-10 link" to>WordPress</nuxt-link>
      <nuxt-link class="mr-10 link" to>Contact</nuxt-link>
      <a class="mr-10 text-xl" href="https://twitter.com/danojonguitud" target="_blank">
        <fa :icon="['fab', 'twitter']" />
      </a>
      <a class="mr-10 text-xl" href="https://www.linkedin.com/in/danieljonguitud/" target="_blank">
        <fa :icon="['fab', 'linkedin']" />
      </a>
    </div>
    <div class="md:hidden">
        <a class="mr-4 text-2xl" href="https://twitter.com/danojonguitud" target="_blank">
        <fa :icon="['fab', 'twitter']" />
      </a>
      <a class="text-2xl" href="https://www.linkedin.com/in/danieljonguitud/" target="_blank">
        <fa :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </nav>
</template>

<style>
.link {
  position: relative;
}

.link:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 0px;
  left: 0;
  background: #ffeba1;
  transition: all 0.3s ease-in-out 0s;
}

.link:hover:after {
  width: 100%;
  left: 0;
  background: #ffeba1;
}
</style>