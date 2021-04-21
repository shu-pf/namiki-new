<template>
  <main>
    <header>
      <h1>
        <nuxt-link to="/">
          <transition name="header-img">
            <img
              v-show="headerVisible"
              src="/img/common/logo.png"
              srcset="/img/common/logo.png 1x, img/common/logo@2x.png 2x"
              height="40px"
              alt="活魚なみき"
            />
          </transition>
        </nuxt-link>
      </h1>
      <div class="burger-button-container">
        <span v-show="isActive">Close</span>
        <burger-button
          :active="isActive"
          :bar-color="'#70644f'"
          :bar-height="2"
          :bar-width="25"
          @click="isActive = !isActive"
        />
      </div>
      <navigationModal
        :is-active="isActive"
        @navigation-close="isActive = !isActive"
      />
    </header>
    <Nuxt />
    <transition name="navigation--fade">
      <div v-show="loading" class="p-modal--loading">
        <div class="c-loader">Loading...</div>
      </div>
    </transition>
    <footer class="footer">
      <img
        class="footer__title"
        src="/img/common/title.png"
        alt="活魚なみき"
        srcset="/img/common/title.png 1x, /img/common/title@2x.png 2x"
      />
      <div class="footer__copywrite">
        <span
          >&copy; {{ new Date().getFullYear() }} namiki All rights
          reserved.</span
        >
      </div>
    </footer>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import BurgerButton from 'vue-burger-button'
import navigationModal from '@/components/navigationModal.vue'

export default Vue.extend({
  components: { BurgerButton, navigationModal },
  data: () => ({ isActive: false, headerVisible: false, loading: true }),
  watch: {
    isActive(isActive) {
      // モーダルウィンドウが開いた際にスクロールさせないようにする
      const html = document.getElementsByTagName('html')
      if (isActive === true) {
        html[0].style.overflow = 'hidden'
      } else {
        html[0].style.overflow = 'auto'
      }
    },
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      this.$nuxt.$on('show-header', this.showHeader)
      this.$nuxt.$on('hide-header', this.hideHeader)
      this.$nuxt.$on('loaded', this.loaded)
      this.$nuxt.$on('start-loading', this.startLoading)
    },
    showHeader() {
      this.headerVisible = true
    },
    hideHeader() {
      this.headerVisible = false
    },
    loaded() {
      this.loading = false
    },
    startLoading() {
      this.loading = true
    },
  },
})
</script>
