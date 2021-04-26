<template>
  <article id="access">
    <div id="container">
      <section class="p-section--simple u-gutter">
        <h1 class="c-heading--border-bottom">アクセス</h1>
        <p>
          　当店は、元町商店街の6丁目に店を構えております。<br />
          　最寄駅は西元町駅より徒歩1分です。
        </p>
        <iframe
          v-inview:animate="'fadeIn'"
          class="p-map__map u-opacity--0 u-mb3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.826108790249!2d135.17849131494322!3d34.684337980438656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008fabaf7fbac9%3A0x9d1f1d84fd15909f!2z5rS76a2a44Gq44G_44GN!5e0!3m2!1sja!2sjp!4v1618929168650!5m2!1sja!2sjp"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div class="c-table u-mb4">
          <div class="tr">
            <div class="th">所在地</div>
            <div class="td">〒650-0022 兵庫県 神戸市中央区 元町通 6-3-18</div>
          </div>
          <div class="tr">
            <div class="th">TEL</div>
            <div class="td">078-341-3378</div>
          </div>
          <div class="tr">
            <div class="th">営業時間</div>
            <div class="td">10:00 - 19:30</div>
          </div>
          <div class="tr">
            <div class="th">定休日</div>
            <div class="td">水曜日・第三日曜日</div>
          </div>
        </div>
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
    title: 'アクセス',
  }),
  head() {
    return {
      title: this.title,
    }
  },
  created() {
    this.$nuxt.$emit('start-loading')
  },
  mounted() {
    this.$nuxt.$emit('show-header')
    const access = document.getElementById('access')
    imagesLoaded(access, () => {
      this.$nuxt.$emit('loaded')
    })
  },
})
</script>
