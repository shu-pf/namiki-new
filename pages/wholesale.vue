<template>
  <article>
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
              class="c-heading__subtitle"
              src="/img/wholesale/heading_subtitle01.svg"
              alt="卸売"
            />
            <h1 class="c-heading__title">卸売り</h1>
          </div>
          <p class="p-section__paragraph">
            　当社では個人のお客様はもとより、飲食店のオーナー様や料理長にも幅広い支持を頂いております。<br />
            　いつご注文を頂いても対応が出来る品揃えをしておりますので、急な追加注文などにも可能な範囲で承らせて頂きます。<br />
            　当社にはキャリア豊富なスタッフが在籍しておりますので、お魚の事でしたら何でもお気軽にご相談下さい。<br />
            　貴社の仕入力アップをお約束致します。
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
        <p>　飲食店・料亭・魚にこだわった居酒屋 など</p>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.$nuxt.$emit('show-header')
  },
})
</script>
