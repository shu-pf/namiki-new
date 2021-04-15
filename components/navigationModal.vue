<template>
  <div v-show="isActive" class="modal">
    <nav>
      <nuxt-link to="/">トップページ</nuxt-link>
      <nuxt-link to="/shop">店舗販売</nuxt-link>
      <nuxt-link to="/2">卸売り</nuxt-link>
      <nuxt-link to="/3">アクセス</nuxt-link>
      <nuxt-link to="/4">お問い合わせ</nuxt-link>
      <div class="social-icons">
        <img src="/img/common/icon/facebook.svg" alt="facebook" />
        <img class="line" src="/img/common/icon/line.svg" alt="facebook" />
        <img src="/img/common/icon/instagram.svg" alt="facebook" />
      </div>
    </nav>
    <div class="copywrite">
      <span
        >&copy; {{ new Date().getFullYear() }} namiki All rights reserved.</span
      >
    </div>
    <div class="title">
      <img src="/img/common/title.svg" alt="活魚なみき" />
    </div>
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
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  nav {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-between;
    a {
      color: white;
      text-decoration: none;
      text-align: center;
      font-size: 8vw;
      letter-spacing: 8px;
      transition-duration: 500ms;
    }
    a:hover {
      color: var(--color-primary);
    }
    a.nuxt-link-exact-active {
      color: var(--color-primary);
    }
    .social-icons {
      margin: 0 auto;
      .line {
        margin: 0 32px;
      }
    }
  }
  .copywrite {
    position: fixed;
    bottom: 16px;
  }
  .title {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
}
</style>
