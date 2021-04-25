<template>
  <article id="shop">
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
            <img src="/img/shop/heading_img01@2x.png" style="display: none" />
            <img
              class="c-heading__subtitle"
              src="/img/shop/heading_subtitle01.svg"
              alt="店舗"
            />
            <h1 class="c-heading__title">店舗販売</h1>
          </div>
          <p class="p-section__paragraph">
            　神戸市元町商店街6丁目にある店内では、毎日その日に浜から仕入れた新鮮な魚を、食べやすいように調理をした上販売しております。<br />
            　また、当店自慢の大きな水槽からも、ぜひお買い求めください。<br />
            　下処理は勿論、三枚おろし、二枚おろし、焼き物に煮付けに、如何様にもお料理させていただきます。
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
            src="/img/shop/item_photo02.png"
            alt=""
            srcset="
              /img/shop/item_photo02.png    1x,
              /img/shop/item_photo02@2x.png 2x
            "
          />
          <img
            class="c-photos__photo03"
            src="/img/shop/item_photo03.png"
            alt=""
            srcset="
              /img/shop/item_photo03.png    1x,
              /img/shop/item_photo03@2x.png 2x
            "
          />
          <img
            class="c-photos__photo04"
            src="/img/shop/item_photo04.png"
            alt=""
            srcset="
              /img/shop/item_photo04.png    1x,
              /img/shop/item_photo04@2x.png 2x
            "
          />
          <img
            class="c-photos__photo05"
            src="/img/shop/item_photo05.png"
            alt=""
            srcset="
              /img/shop/item_photo05.png    1x,
              /img/shop/item_photo05@2x.png 2x
            "
          />
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
  created() {
    this.$nuxt.$emit('start-loading')
  },
  mounted() {
    this.$nuxt.$emit('show-header')
    const shop = document.getElementById('shop')
    imagesLoaded(shop, () => {
      this.$nuxt.$emit('loaded')
    })
  },
})
</script>
