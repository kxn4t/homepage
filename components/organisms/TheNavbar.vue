<template>
  <nav class="sticky top-0 z-10">
    <div
      class="container flex items-center justify-between mx-auto px-5 lg:px-24 xl:px-32 pt-5 pb-2 text-base tracking-wide font-semibold"
    >
      <div class="font-ja">
        <!-- <nuxt-link to="/" exact class="nav-logo">
          ろご
        </nuxt-link> -->
      </div>
      <ul class="flex justify-end items-center">
        <li>
          <nuxt-link to="/" exact class="nav-menu-item mr-2 sm:mr-5">
            <span class="sm:hidden"><i class="fas fa-home"></i></span>
            <span class="hidden sm:inline-block">home</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" class="nav-menu-item mr-2 sm:mr-5">
            <span class="sm:hidden"><i class="fas fa-user-circle"></i></span>
            <span class="hidden sm:inline-block">about</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/works" class="nav-menu-item mr-2 sm:mr-5">
            <span class="sm:hidden"><i class="fas fa-award"></i></span>
            <span class="hidden sm:inline-block">works</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/loves" class="nav-menu-item mr-2 sm:mr-5">
            <span class="sm:hidden"><i class="fas fa-heart"></i></span>
            <span class="hidden sm:inline-block">loves</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="nav-menu-item">
            <span class="sm:hidden"><i class="fas fa-envelope"></i></span>
            <span class="hidden sm:inline-block">contact</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      // 変化するポイントまでスクロールしたらクラスを追加
      if (window.pageYOffset > 50) {
        this.$el.classList.add('nav-back')
      } else if (this.$el.classList.contains('nav-back')) {
        this.$el.classList.remove('nav-back')
      }
    })
  },
}
</script>

<style scoped>
.nav-back {
  transition: 0.7s;
  background-color: rgba(255, 255, 255, 0.7);
  background-color: var(--header-bg-mask);
}
.nav-logo {
  display: inline-block;
  text-align: center;
  transition: 0.5s;
  text-decoration: none;
  padding: 8px 15px;
  width: 80px;
}
.nav-menu-item {
  position: relative;
  display: inline-block;
  text-align: center;
  transition: 0.5s;
  text-decoration: none;
  padding: 8px 15px;
}
.nav-menu-item:not(.nuxt-link-active)::after {
  position: absolute;
  bottom: -1px;
  left: 50%;
  content: '';
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: 0.3s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.nav-menu-item:not(.nuxt-link-active):hover::after {
  width: 100%;
}
.nav-menu-item.nuxt-link-active {
  transition: 0s;
  border-bottom: #1c3d5a 2px solid;
  border-bottom: var(--main-text) 2px solid;
}
</style>
