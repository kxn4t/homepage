<template>
  <div>
    <RoundLinkButton
      v-for="(item, index) in items"
      :key="index"
      :link="item.link"
      :rel="item.rel"
      :label="item.label"
      :icon-class="item.iconClass"
      :icon-element="item.iconElement"
      :style="{ animationDelay: index * 100 + 200 + 'ms' }"
      class="item sm:mr-4"
    />
  </div>
</template>

<script>
import RoundLinkButton from '~/components/atoms/RoundLinkButton'

export default {
  components: {
    RoundLinkButton,
  },
  props: {
    items: {
      type: Array,
      require: false,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.round-button:hover /deep/ .icon-twitter {
  color: #1da1f2;
}
.round-button:hover /deep/ .icon-mastodon {
  color: #3088d4;
}
.round-button:hover /deep/ .icon-github {
  color: #24292e;
}
.round-button:hover /deep/ .icon-qiita {
  color: #55c500;
}
.round-button:hover /deep/ .icon-zenn {
  color: #3ea8ff;
}

@keyframes fade-in {
  0% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}

.item {
  animation: fade-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>
