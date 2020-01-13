<template>
  <div class="round-button text-lg">
    <a
      :href="link"
      :rel="'noreferrer noopener ' + rel"
      target="_blank"
      class="round-button-link"
    >
      <span class="round-button-inner"></span>
    </a>
    <a
      :href="link"
      :rel="'noreferrer noopener ' + rel"
      target="_blank"
      class="round-button-icon"
    >
      <span v-html="iconElement" :class="iconClass"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'https://twitter.com/kxn4t',
      required: true
    },
    rel: {
      type: String,
      default: '',
      required: false
    },
    iconElement: {
      type: String,
      default: '<i class="fab fa-twitter"></i>',
      required: true
    },
    iconClass: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style scoped>
.round-button {
  position: relative;
  display: inline-flex;
  width: 45px;
  height: 45px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.round-button-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotation 4s infinite linear;
}
.round-button-inner {
  position: absolute;
  border: 1px solid #1c3d5a;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: 0.15s ease-out;
}
.round-button-icon {
  position: relative;
  color: #1c3d5a;
  transition: 0.15s ease-out;
}
.round-button:hover .round-button-icon {
  transform: scale(1.5, 1.5);
}
.round-button:hover .round-button-inner {
  border: 1px dashed var(--accent-color);
  transform: scale(1.4);
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* chrome */
@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
  .round-button-icon {
    transition: 0.35s ease-in-out;
  }
  .round-button:hover .round-button-icon {
    transform: rotate3d(0, -1, 0, 360deg) scale(1.5, 1.5);
  }
}
</style>
