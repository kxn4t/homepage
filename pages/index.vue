<template>
  <div class="parent">
    <div class="font-ja pt-20 sm:pt-40">
      <span class="text-item delay-anime">か</span>
      <span class="text-item delay-anime">な</span>
      <span class="text-item delay-anime">め</span>
      <span class="text-item delay-anime">り</span>
      <span class="text-item delay-anime">ぜ</span>
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
  head() {
    return {
      titleTemplate: null,
      title: 'かなめりぜ',
    }
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
  animation: text-in 1s ease-in-out 3s backwards;
}
</style>
