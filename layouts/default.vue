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
  </main>
</template>
<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import BurgerButton from 'vue-burger-button'
import navigationModal from '@/components/navigationModal.vue'

export default Vue.extend({
  components: { BurgerButton, navigationModal },
  data: () => ({ isActive: false, headerVisible: false }),
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
    },
    showHeader() {
      this.headerVisible = true
    },
    hideHeader() {
      this.headerVisible = false
    },
  },
})
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-family: 'Times New Roman', 'YuMincho', 'Hiragino Mincho ProN',
    'Yu Mincho', 'MS PMincho', serif;
  font-size: 16px;
  color: var(--color-primary);
  background-color: #e8e8e8;
  box-sizing: border-box;
}
header {
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  h1 {
    z-index: 4;
    margin-top: 0;
    margin-bottom: 0;
    height: 32px;
    img {
      height: 100%;
    }
  }
  .burger-button-container {
    z-index: 4;
    display: flex;
    align-items: center;
    > span {
      display: block;
      margin-right: 16px;
    }
    .burguer-button {
      height: 32px !important;
      > .bar:nth-child(1) {
        transform: translateY(-350%);
      }
      > .bar:nth-child(3) {
        transform: translateY(350%);
      }
    }
    .burguer-button.-active {
      > .bar:nth-child(1) {
        transform: translateY(100%) rotate(45deg);
      }
      > .bar:nth-child(3) {
        transform: translateY(-100%) rotate(-45deg);
      }
    }
  }
}

.header-img-enter-active,
.header-img-leave-active {
  transition: opacity 0.8s;
}
.header-img-enter,
.header-img-leave-to {
  opacity: 0;
}
</style>
