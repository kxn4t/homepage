<template>
  <section class="flex flex-col sm:h-48 w-full mx-5 mb-3 sm:mb-0">
    <h1 class="section-header-sub font-ja font-semibold m-3 mx-10">
      <i v-if="headerIconClasses.length > 0" :class="headerIconClasses"></i>
      {{ header }}
    </h1>
    <div class="font-ja">
      <ul class="list-disc list-inside">
        <li
          v-for="(item, index) in list"
          :key="index"
          :style="{ animationDelay: index * 100 + 200 + 'ms' }"
          class="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'header',
      required: true,
    },
    headerIconClasses: {
      type: Array,
      default: () => [],
      requierd: false,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.item {
  animation: fade-in 1s ease-out 0s backwards;
}
</style>
