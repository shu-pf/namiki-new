<template>
  <article>
    <div id="container">
      <section class="p-section--simple">
        <h1 class="c-heading--border-bottom">お問い合わせ</h1>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.$nuxt.$emit('show-header')
    window.onscroll = null
  },
})
</script>
