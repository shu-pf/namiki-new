<template>
  <transition name="navigation--fade">
    <div v-show="isActive" class="navigation">
      <div class="navigation__main">
        <div class="navigation__img-container">
          <img
            srcset="/img/top/carousel-1.png 1x, /img/top/carousel-1@2x.png 2x"
            src="/img/top/carousel-1.png"
            alt="店構え"
          />
        </div>
        <div class="navigation__nav-container">
          <nav>
            <nuxt-link to="/" @click.native.prevent="close"
              >トップページ</nuxt-link
            >
            <nuxt-link to="/shop" @click.native.prevent="close"
              >店舗販売</nuxt-link
            >
            <nuxt-link to="/wholesale">卸売り</nuxt-link>
            <nuxt-link to="/access">アクセス</nuxt-link>
            <nuxt-link to="/contact">お問い合わせ</nuxt-link>
            <div class="social-icons">
              <img src="/img/common/icon/facebook.svg" alt="facebook" />
              <img
                class="line"
                src="/img/common/icon/line.svg"
                alt="facebook"
              />
              <img src="/img/common/icon/instagram.svg" alt="facebook" />
            </div>
          </nav>
        </div>
      </div>
      <div class="navigation__copywrite">
        <span
          >&copy; {{ new Date().getFullYear() }} namiki All rights
          reserved.</span
        >
      </div>
      <div class="navigation__title">
        <img src="/img/common/title.svg" alt="活魚なみき" />
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { isActive: Boolean },
  methods: {
    close() {
      this.$emit('navigation-close')
    },
  },
})
</script>
