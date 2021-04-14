<template>
  <main>
    <header>
      <h1>
        <nuxt-link to="/">
          <img
            src="/img/common/logo.png"
            srcset="/img/common/logo.png 1x, img/common/logo@2x.png 2x"
            height="40px"
            alt="活魚なみき"
          />
        </nuxt-link>
      </h1>
      <burger-button
        :active="isActive"
        :bar-color="'#ffffff'"
        :bar-height="4"
        :bar-width="42"
        @click="isActive = !isActive"
      />
    </header>
    <Nuxt />
  </main>
</template>
<script>
import Vue from 'vue'
import BurgerButton from 'vue-burger-button'

export default Vue.extend({
  components: { BurgerButton },
  data: () => ({ isActive: false }),
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
  color: #70644f;
  background-color: #e8e8e8;
  box-sizing: border-box;
}
header {
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  h1 {
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 8px;
  }
  .burguer-button {
    margin-right: 16px;
    margin-top: 16px;
    height: 42px !important;
  }
}

.burguer-button > .bar:nth-child(1) {
  transform: translateY(-200%);
}

.burguer-button > .bar:nth-child(3) {
  transform: translateY(200%);
}

.burguer-button.-active > .bar:nth-child(1) {
  transform: translateY(100%) rotate(45deg);
}

.burguer-button.-active > .bar:nth-child(3) {
  transform: translateY(-100%) rotate(-45deg);
}
</style>
