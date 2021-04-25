<template>
  <transition name="navigation--fade">
    <div v-show="isActive" class="navigation">
      <div class="navigation__main">
        <div class="navigation__img-container">
          <img
            srcset="/img/common/shop.png 1x, /img/common/shop@2x.png 2x"
            src="/img/common/shop.png"
            alt="店構え"
          />
        </div>
        <div class="navigation__nav-container">
          <nav>
            <a @click="routerPush('/')">トップページ</a>
            <a @click="routerPush('/shop')">店舗販売</a>
            <a @click="routerPush('/wholesale')">卸売り</a>
            <a @click="routerPush('/access')">アクセス</a>
            <a @click="routerPush('/contact')">お問い合わせ</a>
            <div class="social-icons">
              <a href="https://ja-jp.facebook.com/ikeuonamiki/">
                <img src="/img/common/icon/facebook.svg" alt="facebook" />
              </a>
              <a href="https://lin.ee/cvj6fau">
                <img
                  class="line"
                  src="/img/common/icon/line.svg"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/ikeuonamiki_/">
                <img src="/img/common/icon/instagram.svg" alt="facebook" />
              </a>
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
    routerPush(path: string) {
      if (path === this.$nuxt.$route.path) {
        this.$emit('navigation-close')
      } else {
        this.$nuxt.$emit('start-loading')
        this.$emit('navigation-close')
        this.$router.push(path)
      }
    },
  },
})
</script>
