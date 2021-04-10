<template>
  <article>
    <div class="carousel">
      <img
        srcset="
          /img/top/top-carousel-1.png    1x,
          /img/top/top-carousel-1@2x.png 2x
        "
        src="/img/top/top-carousel-1.png"
        alt="店構え"
        height="100%"
      />
    </div>
    <div class="container"></div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="scss" scoped>
.carousel {
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
