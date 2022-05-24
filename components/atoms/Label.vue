<template>
  <span
    class="font-ja px-3 text-xs rounded-full inline-block label-color"
    :class="textColor"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      accentColor: '',
    }
  },
  computed: {
    textColor() {
      switch (this.accentColor) {
        // えんじ色のときだけ白に
        case 'rgb(226, 91, 69)':
          return 'label-text-light'
        default:
          return 'label-text-dark'
      }
    },
  },
  mounted() {
    this.accentColor = window
      .getComputedStyle(this.$el)
      .getPropertyValue('background-color')
  },
}
</script>

<style lang="scss" scoped>
.label-color {
  background-color: #e25b45;
  background-color: var(--accent-color);
}
.label-text-dark {
  color: #1c3d5a;
}
.label-text-light {
  color: #f4f4f4;
}
</style>
