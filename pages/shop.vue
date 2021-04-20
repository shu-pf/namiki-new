<template>
  <article>
    <div id="container">
      <section class="p-section">
        <div>
          <div class="c-heading">
            <div
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="c-heading__img--top-heading-img01"
              alt="店構え"
            />
            <img
              class="c-heading__subtitle"
              src="/img/top/heading_subtitle01.svg"
              alt="活魚"
            />
            <h2 class="c-heading__title">神戸元町商店街にある鮮魚店</h2>
          </div>
          <p class="p-section__paragraph">
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
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
