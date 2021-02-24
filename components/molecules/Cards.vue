<template>
  <div class="w-full">
    <div class="flex flex-wrap flex-col sm:flex-row pt-2 pb-5">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-full flex-shrink-0 sm:w-1/3"
      >
        <card
          :link="item.link"
          :img="item.img"
          :img-alt="item.imgAlt"
          :title="item.title"
          :content="item.content"
          :tags="item.tags"
          :style="{ animationDelay: index * 100 + 200 + 'ms' }"
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/atoms/Card'

export default {
  components: {
    Card,
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

<style scoped>
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
