<template>
  <article>
    <div id="container">
      <section>
        <div>
          <div class="heading">
            <img
              src="/img/top/top-heading-1.png"
              srcset="
                /img/top/top-heading-1.png    1x,
                /img/top/top-heading-1@2x.png 2x
              "
              alt="店構え"
            />
            <h2 class="heading-title">神戸元町商店街にある鮮魚店</h2>
          </div>
          <p>
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　当店は創業明治120年の歴史を持ち、神戸で最古の鮮魚店です。<br /><br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　毎日、店主が自ら競りが行われる浜へ行き、長年の経験、本物の目利きで最高のものを選んで参ります。<br />
            <!-- eslint-disable-next-line no-irregular-whitespace -->
            　他のお店では見られない種類の海介顔、養殖でない天然物、本鮪の様な最高の高級魚から、サンマのような毎日の食卓へのお手頃なお魚、そして、抜群の鮮度のものを品揃えさせて頂いております。
          </p>
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="scss" scoped>
#container {
  margin: 0 auto;
  max-width: 1640px;
  section {
    // height: 100vh;
    > div {
      padding-top: 64px;
      padding-bottom: 64px;
      .heading {
        position: relative;
        height: calc(278px + (min(100vw, 1640px) - 300px) * 0.23);
        margin-bottom: 40px;
        > img {
          position: absolute;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }
        > h2 {
          position: absolute;
          // 0.02 : 画面幅 1640px の時に font-size 50px になるように調整した値
          font-size: calc(24px + (min(100vw, 1640px) - 375px) * 0.02);
          top: 75%;
          /* stylelint-disable length-zero-no-unit */
          left: calc(10px + max(0px, (100% - 350px) * 0.59));
          width: calc(100% - (10px + max(0px, 100% - 350px) * 0.59));
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 20px;
          // とりあえず
          padding-right: 8px;
          background-color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }
}
</style>
