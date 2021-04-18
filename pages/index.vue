<template>
  <article>
    <div class="carousel">
      <img
        srcset="
          /img/top/top-carousel-1.png    1x,
          /img/top/top-carousel-1@2x.png 2x
        "
        src="/img/top/top-carousel-1.png"
        alt="店構え"
      />
      <div class="overlay"></div>
      <h1>
        <img
          class="title"
          src="/img/top/top-title.png"
          alt="活魚なみき"
          srcset="/img/top/top-title.png 1x, /img/top/top-title@2x.png 2x"
        />
      </h1>
    </div>
    <div id="container">
      <section>
        <div>
          <div class="heading">
            <div
              v-inview:animate="'fadeInRight'"
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="heading-img shop-outward"
              alt="店構え"
            />
            <img
              v-inview:animate="'fadeIn'"
              class="subtitle"
              src="/img/top/top-subtitle-ikeuo.svg"
              alt="活魚"
            />
            <h2 v-inview:animate="'fadeInRight'" class="heading-title">
              神戸元町商店街にある鮮魚店
            </h2>
          </div>
          <p v-inview:animate="'fadeInRight'">
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　他のお店では見られない種類の海介顔、養殖でない天然物、本鮪の様な最高の高級魚から、サンマのような毎日の食卓へのお手頃なお魚、そして、抜群の鮮度のものを品揃えさせて頂いております。
          </p>
        </div>
      </section>
      <section>
        <div>
          <div class="heading heading-small">
            <div
              v-inview:animate="'fadeInRight'"
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="heading-img cooking"
              alt="料理風景"
            />
            <img
              v-inview:animate="'fadeIn'"
              class="subtitle"
              src="/img/top/top-subtitle-ikeuo.svg"
              alt="活魚"
            />
            <h2 v-inview:animate="'fadeInRight'" class="heading-title">
              こだわり
            </h2>
          </div>
          <p v-inview:animate="'fadeInRight'">
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            内容 ・毎日昼あみ、朝あみ行っている ・それが昼に店に並ぶ など<br />
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
    this.$nuxt.$emit('hide-header')
    window.onscroll = function () {
      if (window.pageYOffset > window.innerHeight) {
        this.$nuxt.$emit('show-header')
      } else {
        this.$nuxt.$emit('hide-header')
      }
    }
  },
})
</script>
