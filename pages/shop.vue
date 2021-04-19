<template>
  <article>
    <div id="container">
      <section>
        <div>
          <div class="heading">
            <img
              class="heading-img"
              src="/img/top/top-heading-1.png"
              srcset="
                /img/top/top-heading-1.png    1x,
                /img/top/top-heading-1@2x.png 2x
              "
              alt="店構え"
            />
            <img
              class="subtitle"
              src="/img/top/top-subtitle-ikeuo.svg"
              alt="活魚"
            />
            <h2 class="heading-title">神戸元町商店街にある鮮魚店</h2>
          </div>
          <p>
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　他のお店では見られない種類の海介顔、養殖でない天然物、本鮪の様な最高の高級魚から、サンマのような毎日の食卓へのお手頃なお魚、そして、抜群の鮮度のものを品揃えさせて頂いております。
          </p>
        </div>
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
