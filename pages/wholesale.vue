<template>
  <article id="wholesale">
    <div id="container">
      <section class="p-section--padding-bottom-0">
        <div>
          <div class="c-heading">
            <div
              v-prlx.background="{
                speed: 0.05,
                fromBottom: true,
              }"
              class="c-heading__img--wholesale-heading-img01"
              alt="競り市"
            />
            <img
              src="/img/wholesale/heading_img01@2x.png"
              style="display: none"
            />
            <img
              class="c-heading__subtitle"
              src="/img/wholesale/heading_subtitle01.svg"
              alt="卸売"
            />
            <h1 class="c-heading__title">卸売り</h1>
          </div>
          <p class="p-section__paragraph">
            　当店では、寿司屋、フレンチレストラン、割烹料理店、居酒屋、お好み焼き屋まで、幅広くご注文を承っております。<br />
            　また、幼稚園・保育園や老人ホーム向けの給食向けの切り身など対応しております。<br /><br />
            　4代目の目利きで選んだ、鮮度にこだわっている魚はもちろん、ちりめんじゃこから干し物まで、幅広く揃えており、下処理から、泳がせたまま配達も可能です。<br />
            <br />
            　お魚の仕入れに関してはなんでもご相談ください。
          </p>
        </div>
      </section>
      <section class="u-gutter">
        <h2 class="c-heading--border-bottom">配送エリア</h2>
        <p>
          　配達は、兵庫区、中央区を中心に承っております。<br />
          　※それ以外の付近の場所については、お問い合わせよりご相談ください。
        </p>
      </section>
      <section class="u-gutter">
        <h2 class="c-heading--border-bottom">卸先例</h2>
        <p>
          　寿司屋、フレンチレストラン、イタリアンレストラン、割烹料理店、居酒屋、お好み焼き屋、幼稚園・保育園、老人ホーム...
          など
        </p>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import imagesLoaded from 'imagesloaded'

export default Vue.extend({
  created() {
    this.$nuxt.$emit('start-loading')
  },
  mounted() {
    this.$nuxt.$emit('show-header')
    const wholesale = document.getElementById('wholesale')
    imagesLoaded(wholesale, () => {
      this.$nuxt.$emit('loaded')
    })

    const self = this
    setTimeout(function () {
      self.$nuxt.$emit('loaded')
    }, 3000)
  },
})
</script>
