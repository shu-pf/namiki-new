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
              class="c-heading__img--shop-heading-img01"
              alt="店構え"
            />
            <img
              class="c-heading__subtitle"
              src="/img/shop/heading_subtitle01.svg"
              alt="店舗"
            />
            <h1 class="c-heading__title">店舗販売</h1>
          </div>
          <p class="p-section__paragraph">
            　活魚なみきでは、新鮮で旬なお魚をその日、その場で下処理・調理いたします。<br />
            　『お刺身・焼く・煮る』など、お客様のご要望をお伝えください。<br />
            　他にも、既に下処理・調理を施した商品もご提供 しております。<br />
            　旬によって販売しているお魚が異なりますので、ぜひ一度魚秀へお立ち寄りくださいませ。
          </p>
        </div>
      </section>
      <section class="u-gutter">
        <h2 class="c-heading--border-bottom">特売情報</h2>
        <p class="c-sale">
          「３」と「７」のつく日は<br /><span class="c-sale__title"
            >「なみきの日」</span
          ><br />
          お刺身・鮮魚・お寿司 の よりどり3パック<br />
          <span class="c-sale__price">９７２円（税込）</span
          ><span>にてご奉仕しております。</span>
        </p>
      </section>
      <section class="u-gutter u-mb4">
        <h2 class="c-heading--border-bottom">商品写真</h2>
        <div class="c-photos">
          <img
            class="c-photos__photo01"
            src="/img/shop/item_photo01.png"
            alt=""
            srcset="
              /img/shop/item_photo01.png    1x,
              /img/shop/item_photo01@2x.png 2x
            "
          />
          <img
            class="c-photos__photo02"
            src="/img/shop/item_photo01.png"
            alt=""
            srcset="
              /img/shop/item_photo01.png    1x,
              /img/shop/item_photo01@2x.png 2x
            "
          />
          <img
            class="c-photos__photo03"
            src="/img/shop/item_photo01.png"
            alt=""
            srcset="
              /img/shop/item_photo01.png    1x,
              /img/shop/item_photo01@2x.png 2x
            "
          />
          <img
            class="c-photos__photo04"
            src="/img/shop/item_photo01.png"
            alt=""
            srcset="
              /img/shop/item_photo01.png    1x,
              /img/shop/item_photo01@2x.png 2x
            "
          />
          <img
            class="c-photos__photo05"
            src="/img/shop/item_photo01.png"
            alt=""
            srcset="
              /img/shop/item_photo01.png    1x,
              /img/shop/item_photo01@2x.png 2x
            "
          />
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
  },
})
</script>
