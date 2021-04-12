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
    <div class="container">
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

.container {
  margin: 0 auto;
  max-width: 1080px;
  section {
    height: 100vh;
    > div {
      padding-top: 32px;
      padding-bottom: 32px;
      .heading {
        position: relative;
        height: 300px;
        > img {
          position: absolute;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
