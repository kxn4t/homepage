<template>
  <div class="parent">
    <div class="font-ja pt-20 sm:pt-40">
      <img v-if="darkmode" v-lazy="logoWhite" class="w-64 logo" alt="logo" />
      <img v-else v-lazy="logo" class="w-64 logo" alt="logo" />
      <div class="sub">- すべてを自分らしく。-</div>
    </div>
    <div>
      <img
        class="children w-24 h-24"
        src=""
        alt="main-chara-image"
        style="opacity: 0"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkmode: false,
      logoWhite: require('~/assets/images/logo-white.png'),
      logo: require('~/assets/images/logo.png'),
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: 'かなめりぜ',
    }
  },
  mounted() {
    const osDark = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event) => {
      if (event.matches) {
        // 再描画しないとなぜかdata-srcとsrcに差分がでて切り替わらない
        this.darkmode = false
        this.$nextTick(() => {
          this.darkmode = true
        })
      } else {
        this.darkmode = true
        this.$nextTick(() => {
          this.darkmode = false
        })
      }
    }
    osDark.addEventListener('change', listener)
    listener(osDark)
  },
}
</script>

<style lang="scss" scoped>
.parent {
  position: relative;
  height: calc(100vh - 82px);
}
.children {
  position: absolute;
  right: 0;
  bottom: 4rem;
}

@keyframes anim-scale {
  0% {
    transform: scale(0, 0);
    opacity: 0;
  }
  40% {
    transform: scale(1.2, 1.2);
    opacity: 0.6;
  }
  60% {
    transform: scale(1, 1);
    opacity: 1;
  }
  80% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.text-item {
  display: inline-block;
  font-size: 3rem;
  animation: anim-scale 0.45s ease-in-out 0s backwards;
}
@for $i from 0 to 5 {
  .delay-anime:nth-child(#{$i + 1 }) {
    animation-delay: $i * 450ms + 200ms;
  }
}

@keyframes text-in {
  0% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
.sub {
  animation: text-in 1s ease-in-out 1s backwards;
}
</style>
