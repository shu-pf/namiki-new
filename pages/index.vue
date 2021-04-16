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
            <img
              class="heading-img"
              src="/img/top/top-heading-1.png"
              srcset="
                /img/top/top-heading-1.png    1x,
                /img/top/top-heading-1@2x.png 2x
              "
              alt="店構え"
            />
            <img
              class="subtitle"
              src="/img/top/top-subtitle-ikeuo.svg"
              alt="活魚"
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
.carousel {
  height: 100vh;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.45;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
  }
}

#container {
  margin: 0 auto;
  max-width: 1640px;
  section {
    // height: 100vh;
    > div {
      padding-top: 64px;
      padding-bottom: 64px;
      > p {
        margin: 0 16px;
      }
      @media screen and (min-width: 1640px) {
        > p {
          margin: 0;
        }
      }
      .heading {
        position: relative;
        height: calc(278px + (min(100vw, 1640px) - 300px) * 0.23);
        margin-bottom: 40px;
        .heading-img {
          position: absolute;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }
        .subtitle {
          position: absolute;
          left: calc(100% - 16px);
          transform: translateX(-100%);
          height: 60%;
        }
        @media screen and (min-width: 1640px) {
          .subtitle {
            left: 100%;
          }
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
