<template>
  <article>
    <div id="container">
      <section class="p-section--simple u-gutter">
        <h1 class="c-heading--border-bottom">お問い合わせ</h1>
        <p>
          　魚の仕入れやその他の要件については以下の電話番号にて承っております。
        </p>
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
            <div class="td">10:00 - 19:00</div>
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

export default Vue.extend({
  mounted() {
    this.$nuxt.$emit('show-header')
  },
})
</script>
