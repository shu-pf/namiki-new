<template>
  <div v-show="isActive" class="modal">
    <nav>
      <nuxt-link to="/">トップページ</nuxt-link>
      <nuxt-link to="/">店舗販売</nuxt-link>
      <nuxt-link to="/">卸売り</nuxt-link>
      <nuxt-link to="/">アクセス</nuxt-link>
      <nuxt-link to="/">お問い合わせ</nuxt-link>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { isActive: Boolean },
})
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #0f2350;
  display: flex;
  align-items: center;
  justify-content: center;
  nav {
    display: flex;
    flex-flow: column;
    a {
      color: white;
      text-decoration: none;
      text-align: center;
    }
  }
}
</style>
