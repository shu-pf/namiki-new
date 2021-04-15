<template>
  <transition name="fade">
    <div v-show="isActive" class="modal">
      <div class="main">
        <div class="img-container">
          <img
            srcset="
              /img/top/top-carousel-1.png    1x,
              /img/top/top-carousel-1@2x.png 2x
            "
            src="/img/top/top-carousel-1.png"
            alt="店構え"
          />
        </div>
        <div class="nav-container">
          <nav>
            <nuxt-link v-show="isActive" to="/">トップページ</nuxt-link>
            <nuxt-link to="/shop">店舗販売</nuxt-link>
            <nuxt-link to="/2">卸売り</nuxt-link>
            <nuxt-link to="/3">アクセス</nuxt-link>
            <nuxt-link to="/4">お問い合わせ</nuxt-link>
            <div class="social-icons">
              <img src="/img/common/icon/facebook.svg" alt="facebook" />
              <img
                class="line"
                src="/img/common/icon/line.svg"
                alt="facebook"
              />
              <img src="/img/common/icon/instagram.svg" alt="facebook" />
            </div>
          </nav>
        </div>
      </div>
      <div class="copywrite">
        <span
          >&copy; {{ new Date().getFullYear() }} namiki All rights
          reserved.</span
        >
      </div>
      <div class="title">
        <img src="/img/common/title.svg" alt="活魚なみき" />
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: { isActive: Boolean },
})
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--color-secondary);
  .main {
    display: flex;
    height: 100%;
    .img-container {
      display: none;
    }
    @media screen and (min-width: 700px) {
      .img-container {
        display: flex;
        width: 50%;
        align-items: center;
        img {
          margin-left: auto;
          width: 90%;
          height: 70%;
          object-fit: cover;
          box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
        }
      }
    }
    .nav-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      nav {
        display: flex;
        flex-direction: column;
        height: 80%;
        justify-content: space-between;
        a {
          color: white;
          opacity: 0.3;
          text-decoration: none;
          text-align: center;
          font-size: 8vw;
          letter-spacing: 8px;
          transition-duration: 500ms;
        }
        a:hover {
          color: var(--color-primary);
        }
        a.nuxt-link-exact-active {
          color: var(--color-primary);
          opacity: 1;
        }
        .social-icons {
          margin: 0 auto;
          .line {
            margin: 0 32px;
          }
        }
      }
    }
    @media screen and (min-width: 700px) {
      .nav-container {
        width: 50%;
        nav {
          height: 70%;
          a {
            // font-size: 2vw;
            font-size: 24px;
            text-align: left;
          }
        }
      }
    }
  }
  .copywrite {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translate(-50%, 0);
    white-space: nowrap;
  }
  .title {
    position: fixed;
    bottom: 16px;
    right: 16px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
