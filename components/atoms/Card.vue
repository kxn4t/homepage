<template>
  <div>
    <div
      class="relative mx-0 my-2 sm:m-2 bg border border-color rounded-diagonal shadow-lg overflow-hidden"
    >
      <!-- image -->
      <img
        v-if="img != ''"
        :src="img"
        :alt="imgAlt"
        class="h-32 w-full object-cover object-center"
      />
      <div class="p-3 h-auto sm:h-56">
        <!-- title -->
        <div class="mb-1 font-semibold text-lg sm:text-base lg:text-lg">
          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noreferrer noopener"
            class="link"
          >
            {{ title }}
          </a>
          <span v-else>{{ title }}</span>
        </div>
        <!-- content -->
        <div class="block light-font-color text-sm leading-relaxed">
          {{ content }}
        </div>
        <!-- tags -->
        <div
          v-if="tags"
          class="relative sm:absolute bottom-0 lg:block mt-1 sm:mb-3"
        >
          <span
            v-for="(tag, key, index) in tags"
            :key="index"
            class="inline py-1 px-2 mr-1 rounded-full text-3xs tag-text tag-bg"
          >
            {{ '#' + tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
      required: false,
    },
    img: {
      type: String,
      default: '',
      required: false,
    },
    imgAlt: {
      type: String,
      default: 'cade image',
      required: false,
    },
    title: {
      type: String,
      default: 'title',
      required: true,
    },
    content: {
      type: String,
      default: 'content',
      required: true,
    },
    tags: {
      type: Array,
      default: () => ['tag1', 'tag2'],
      required: false,
    },
  },
}
</script>

<style scoped>
.bg {
  background-color: #fff;
  background-color: var(--main-bg);
}

.border-color {
  border-color: #edf2f7;
  border-color: var(--border-color);
}

.tag-text {
  color: #4a5568;
  color: var(--tag-text);
}

.tag-bg {
  background-color: #e2e8f0;
  background-color: var(--tag-bg);
}

.rounded-diagonal {
  border-top-left-radius: 1.75rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 1.75rem;
  border-bottom-left-radius: 0.5rem;
}
.text-3xs {
  font-size: 0.5rem;
}
</style>
