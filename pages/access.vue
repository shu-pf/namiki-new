<template>
  <article>
    <div id="container"></div>
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
