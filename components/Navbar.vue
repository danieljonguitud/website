<template>
  <div>
    <nav class="flex flex-row justify-between text-white font-thin sm:py-10 py-10">
      <div>
        <nuxt-link to="/">
          <img
            src="../static/logo-fit-white.png"
            alt="Daniel Jonguitud Logo"
            width="100"
            height="100"
          />
        </nuxt-link>
      </div>
      <div class="text-lg self-center hidden md:block">
        <nuxt-link class="mr-10 link" to="resume" target="_blank" rel="noopener noreferrer">Resume</nuxt-link>
        <button class="mr-10 font-thin link" id="show-modal" @click="showModal = true">Contact</button>
        <a
          class="mr-10 text-xl"
          href="https://github.com/danieljonguitud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa
            class="hover:text-github transition-colors duration-150 ease-in-out"
            :icon="['fab', 'github']"
          />
        </a>
        <a
          class="mr-10 sm:mr-0 text-xl"
          href="https://www.linkedin.com/in/danieljonguitud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa
            class="hover:text-linkedin transition-colors duration-150 ease-in-out"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
      <div class="md:hidden">
        <a
          class="mr-4 link text-xl"
          href="http://danieljonguitud.com/resume"
          target="_blank"
          rel="noopener noreferrer"
        >Resume</a>
        <a class="mr-4 text-2xl" href="https://twitter.com/danojonguitud" target="_blank">
          <fa
            class="hover:text-github transition-colors duration-150 ease-in-out"
            :icon="['fab', 'github']"
          />
        </a>
        <a class="text-2xl" href="https://www.linkedin.com/in/danieljonguitud/" target="_blank">
          <fa
            class="hover:text-linkedin transition-colors duration-150 ease-in-out"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
    </nav>
    <Modal :showModal="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  },
};
</script>
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