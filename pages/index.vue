<template>
  <article id="top">
    <div class="p-carousel">
      <video
        id="p-carousel__video"
        class="p-carousel__img"
        src="/img/top/mov/namiki-pc--min.mp4"
        autoplay
        loop
        muted
        playsinline
      />
      <div class="p-carousel__overlay"></div>
      <h1 class="u-m0">
        <img
          class="p-carousel__title"
          src="/img/common/title.png"
          alt="活魚なみき"
          srcset="/img/common/title.png 1x, /img/common/title@2x.png 2x"
        />
      </h1>
      <div class="p-carousel__arrow c-arrow"><span></span>Scroll</div>
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
              class="c-heading__img--top-heading-img01 u-opacity--0"
              alt="店構え"
            />
            <!-- ローディング画面対応 -->
            <img src="/img/top/heading_img01.png" style="display: none" />
            <img
              v-inview:animate="'fadeIn'"
              class="c-heading__subtitle u-opacity--0"
              src="/img/top/heading_subtitle01.svg"
              alt="活魚"
            />
            <h2
              v-inview:animate="'fadeInRight'"
              class="c-heading__title u-opacity--0"
            >
              神戸元町商店街にある鮮魚店
            </h2>
          </div>
          <p
            v-inview:animate="'fadeInRight'"
            class="p-section__paragraph u-opacity--0"
          >
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
            　他のお店では見られない種類の魚介類、養殖でない天然物、本鮪の様な最高の高級魚から、サンマのような毎日の食卓へのお手頃なお魚、そして、抜群の鮮度のものを品揃えさせて頂いております。
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
              class="c-heading__img--top-heading-img02 u-opacity--0"
              alt="料理風景"
            />
            <!-- ローディング画面対応 -->
            <img src="/img/top/heading_img02.png" style="display: none" />
            <img
              v-inview:animate="'fadeIn'"
              class="c-heading__subtitle u-opacity--0"
              src="/img/top/heading_subtitle02.svg"
              alt="活魚"
            />
            <h2
              v-inview:animate="'fadeInRight'"
              class="c-heading__title u-opacity--0"
            >
              抜群の鮮度のものを
            </h2>
          </div>
          <p
            v-inview:animate="'fadeInRight'"
            class="p-section__paragraph u-opacity--0"
          >
            　天然物の魚は、お高いイメージがあります。しかし、店主の「広い世代に採れたての本当に美味しい魚を食べてほしい」という思いから、毎日ご家庭で食べられるお求めやすい価格で提供させていただいております。<br /><br />
            　どうぞご来店いただきご自身の目でご覧になって頂ければと思います。
          </p>
          <div
            v-inview:animate="'fadeInRight'"
            class="p-section__cards c-cards u-opacity--0"
          >
            <div class="c-cards__inner">
              <div class="c-cards__first-card">
                <span class="c-cards__text"
                  >長年の経験により磨かれた<br />目利きによる仕入れ</span
                >
              </div>
              <div class="c-cards__second-card">
                <span class="c-cards__text"
                  >魚の臭みを消す<br />
                  マイクロオゾン搭載の水槽</span
                >
              </div>
              <div class="c-cards__third-card">
                <span class="c-cards__text"
                  >その日に取れたものを<br />食卓へ</span
                >
              </div>
            </div>
            <div class="c-cards__arrow">scroll</div>
          </div>
        </div>
      </section>
      <section class="p-section">
        <div>
          <div class="c-heading">
            <div
              v-inview:animate="'fadeInRight'"
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="c-heading__img--top-heading-img03 u-opacity--0"
              alt="店構え"
            />
            <!-- ローディング画面対応 -->
            <img src="/img/top/heading_img03.png" style="display: none" />
            <img
              v-inview:animate="'fadeIn'"
              class="c-heading__subtitle u-opacity--0"
              src="/img/top/heading_subtitle03.svg"
              alt="活魚"
            />
            <h2
              v-inview:animate="'fadeInRight'"
              class="c-heading__title u-opacity--0"
            >
              神戸元町商店街にある鮮魚店
            </h2>
          </div>
          <p
            v-inview:animate="'fadeInRight'"
            class="p-section__paragraph u-opacity--0"
          >
            　神戸市元町商店街6丁目にある店内では、毎日その日に浜から仕入れた新鮮な魚を、食べやすいように調理をした上販売しております。<br />
            　また、当店自慢の大きな水槽からも、ぜひお買い求めください。<br />
            　新鮮な魚を販売しており、食べやすい様に調理を致します。<br />
            　2枚おろし、焼き物用に、煮付け用に、如何様にも
          </p>
        </div>
      </section>
      <section class="p-sns">
        <h2
          v-inview:animate="'fadeIn'"
          class="c-heading--border-bottom u-opacity--0"
        >
          SNS
        </h2>
        <p v-inview:animate="'fadeIn'" class="u-opacity--0">
          お買い得情報や旬の魚を発信中！
        </p>
        <div
          v-inview:animate="'fadeIn'"
          class="p-sns__social-links u-opacity--0"
        >
          <a
            href="https://ja-jp.facebook.com/ikeuonamiki/"
            target="_blank"
            rel="noopener"
            class="p-sns__social-link c-social-link"
          >
            <img
              src="/img/common/icon/open-in-new.svg"
              alt="link"
              class="c-social-link__open-in-new-tab"
            />
            <img
              class="c-social-link__logo"
              src="/img/common/icon/facebook--brown.svg"
              alt="face book"
            />
            <h3 class="c-social-link__title">Facebook</h3>
          </a>
          <a
            href="https://lin.ee/cvj6fau"
            target="_blank"
            rel="noopener"
            class="p-sns__social-link c-social-link"
          >
            <img
              src="/img/common/icon/open-in-new.svg"
              alt="link"
              class="c-social-link__open-in-new-tab"
            />
            <img
              class="c-social-link__logo"
              src="/img/common/icon/line--brown.svg"
              alt="line"
            />
            <h3 class="c-social-link__title">Line</h3>
          </a>
          <a
            href="https://www.instagram.com/ikeuonamiki_/"
            target="_blank"
            rel="noopener"
            class="p-sns__social-link c-social-link"
          >
            <img
              src="/img/common/icon/open-in-new.svg"
              alt="link"
              class="c-social-link__open-in-new-tab"
            />
            <img
              class="c-social-link__logo"
              src="/img/common/icon/instagram--brown.svg"
              alt="instagram"
            />
            <h3 class="c-social-link__title">Instagram</h3>
          </a>
        </div>
      </section>
      <section class="p-map">
        <h2
          v-inview:animate="'fadeIn'"
          class="p-map__title c-heading--border-bottom u-opacity--0"
        >
          Map
        </h2>
        <iframe
          v-inview:animate="'fadeIn'"
          class="p-map__map u-opacity--0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.826108790249!2d135.17849131494322!3d34.684337980438656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008fabaf7fbac9%3A0x9d1f1d84fd15909f!2z5rS76a2a44Gq44G_44GN!5e0!3m2!1sja!2sjp!4v1618929168650!5m2!1sja!2sjp"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  </article>
</template>
<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import imagesLoaded from 'imagesloaded'

export default Vue.extend({
  data: () => ({
    title: '海産物が安くて新鮮！ 神戸市中央区の鮮魚店 | 活魚 なみき',
    imagesLoaded: false,
    videoLoaded: false,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
  created() {
    this.$nuxt.$emit('start-loading')
  },
  mounted() {
    this.$nuxt.$emit('hide-header')
    // ヘッダーアイコンをカルーセル上で表示させない
    window.onscroll = function () {
      if (window.pageYOffset > window.innerHeight) {
        this.$nuxt.$emit('show-header')
      } else {
        this.$nuxt.$emit('hide-header')
      }
    }
    const video = document.getElementById('p-carousel__video')
    if (video)
      video.addEventListener('canplaythrough', () => {
        this.videoLoaded = true
        this.checkLoaded()
      })
    const top = document.getElementById('top')
    imagesLoaded(top, () => {
      this.imagesLoaded = true
      this.checkLoaded()
    })

    const self = this
    setTimeout(function () {
      self.$nuxt.$emit('loaded')
    }, 3000)
  },
  methods: {
    checkLoaded() {
      if (this.videoLoaded && this.imagesLoaded) {
        this.$nuxt.$emit('loaded')
      }
    },
  },
})
</script>
