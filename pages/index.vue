<template>
  <article>
    <div class="p-carousel">
      <img
        class="p-carousel__img"
        srcset="/img/top/carousel-1.png 1x, /img/top/carousel-1@2x.png 2x"
        src="/img/top/carousel-1.png"
        alt="店構え"
      />
      <div class="p-carousel__overlay"></div>
      <h1>
        <img
          class="p-carousel__title"
          src="/img/top/title.png"
          alt="活魚なみき"
          srcset="/img/top/title.png 1x, /img/top/title@2x.png 2x"
        />
      </h1>
      <a href="#" class="p-carousel__arrow c-arrow"><span></span>Scroll</a>
    </div>
    <div id="container">
      <section class="p-section">
        <div>
          <div class="c-heading">
            <div
              v-inview:animate="'fadeInRight'"
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="c-heading__img--shop-outward"
              alt="店構え"
            />
            <img
              v-inview:animate="'fadeIn'"
              class="c-heading__subtitle"
              src="/img/top/header_subtitle01.svg"
              alt="活魚"
            />
            <h2 v-inview:animate="'fadeInRight'" class="c-heading__title">
              神戸元町商店街にある鮮魚店
            </h2>
          </div>
          <p v-inview:animate="'fadeInRight'" class="p-section__paragraph">
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　他のお店では見られない種類の海介顔、養殖でない天然物、本鮪の様な最高の高級魚から、サンマのような毎日の食卓へのお手頃なお魚、そして、抜群の鮮度のものを品揃えさせて頂いております。
          </p>
        </div>
      </section>
      <section class="p-section">
        <div>
          <div class="c-heading--small">
            <div
              v-inview:animate="'fadeInRight'"
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="c-heading__img--cooking"
              alt="料理風景"
            />
            <img
              v-inview:animate="'fadeIn'"
              class="c-heading__subtitle"
              src="/img/top/header_subtitle02.svg"
              alt="活魚"
            />
            <h2 v-inview:animate="'fadeInRight'" class="c-heading__title">
              抜群の鮮度のものを
            </h2>
          </div>
          <p v-inview:animate="'fadeInRight'" class="p-section__paragraph">
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            内容 ・毎日昼あみ、朝あみ行っている ・それが昼に店に並ぶ など<br />
          </p>
          <div class="p-section__cards c-cards">
            <div class="c-cards__inner">
              <div class="c-cards__first-card">
                <span class="c-cards__text"
                  >長年の経験により磨かれた<br />目利きによる仕入れ</span
                >
              </div>
              <div class="c-cards__second-card">
                <span class="c-cards__text"
                  >毎日昼あみに行き <br />鮮度が高いものを販売</span
                >
              </div>
              <div class="c-cards__third-card">
                <span class="c-cards__text"
                  >マイクロオゾン機能搭載の<br />
                  大きなの水槽</span
                >
              </div>
            </div>
            <div class="c-cards__arrow">scroll</div>
          </div>
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
