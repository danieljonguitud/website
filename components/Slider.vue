<template>
  <div class="sm:w-3/5 sm:pt-0 pt-10 sm:px-10 px-4">
    <VueSlickCarousel class="px-6" v-bind="settings">
      <div>
        <h3 class="text-right font-hairline">
          <a href="https://remenu.co" target="_blank" rel="noopener noreferrer">
            <img class=" pb-4 translate z-50" src="../static/remenu_example.png" alt="Remenu Screenshots"/>
          </a>
          Remenu | Nuxt (Vue.js) + Laravel (PHP)
        </h3>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots",
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1000
      }
    };
  }
};
</script>

<style>
.slick-dots li button:before {
  color: white;
}

.slick-dots li.slick-active button:before {
  color: white;
}

.translate {
  transition: all 0.3s ease-in-out;
}
.translate:hover {
  transform: translate(0, 5px)
}
</style>
