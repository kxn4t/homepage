<template>
  <div>
    <div
      class="relative mx-0 my-2 sm:m-2 bg-white border border-gray-200 rounded-diagonal shadow-lg overflow-hidden"
    >
      <!-- image -->
      <img
        v-if="img != ''"
        :src="img"
        class="h-32 w-full object-cover object-center"
        alt=""
      />
      <div class="p-3 h-auto sm:h-56">
        <!-- title -->
        <div class="mb-1 font-semibold text-lg sm:text-base lg:text-lg">
          <a
            v-if="link"
            :href="link"
            target="_blank"
            rel="noreferrer noopener"
            class="text-blue-500 hover:text-blue-600"
          >
            {{ title }}
          </a>
          <span v-else>{{ title }}</span>
        </div>
        <!-- content -->
        <div class="block text-gray-600 text-sm leading-relaxed">
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
            class="inline py-1 px-2 mr-1 rounded-full text-3xs text-gray-700 bg-gray-300"
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
      required: false
    },
    img: {
      type: String,
      default: '',
      required: false
    },
    title: {
      type: String,
      default: 'title',
      required: true
    },
    content: {
      type: String,
      default: 'content',
      required: true
    },
    tags: {
      type: Array,
      default: () => ['tag1', 'tag2'],
      required: false
    }
  }
}
</script>

<style scoped>
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
