<template>
  <div>
    <nav class="flex flex-row justify-between text-black dark:text-white font-thin sm:py-10 py-10 items-center">
      <div>
        <nuxt-link to="/">
          <span class="md:text-[23px] text-xl font-semibold">Daniel Jonguitud</span>
        </nuxt-link>
      </div>
      <div class="text-[16px] self-center hidden md:block">
        <nuxt-link class="mr-10 link" to="/blog" rel="noopener noreferrer">Blog</nuxt-link>
<!--        <nuxt-link class="mr-10 link" to="/resume" target="_blank" rel="noopener noreferrer">Resume</nuxt-link>-->
        <button class="mr-10 font-thin link" id="show-modal" @click="showModal = true">Contact</button>
        <button
          class="mr-10 text-xl"
          @click.prevent="changeColors"
        >
          <fa v-if="this.$colorMode.value === 'light'"
              class="hover:text-yellow transition-colors duration-150 ease-in-out"
              :icon="['fas', 'moon']"
          />
          <fa v-if="this.$colorMode.value === 'dark'"
              class="hover:text-yellow transition-colors duration-150 ease-in-out"
              :icon="['fas', 'sun']"
          />
        </button>
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
          class="mr-4 link text-[18px]"
          href="http://danieljonguitud.com/resume"
          target="_blank"
          rel="noopener noreferrer"
        >Resume</a>
        <a class="mr-4 text-2xl" href="https://github.com/danieljonguitud" target="_blank">
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
      showModal: false,
      colors: ['system', 'light', 'dark']
    };
  },
  methods: {
    changeColors() {
      console.log(this.$colorMode.value)
      if (this.$colorMode.value === 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
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
