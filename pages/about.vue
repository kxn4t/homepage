<template>
  <article>
    <!-- about -->
    <section class="w-full">
      <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">
        about
      </h1>
      <about />
    </section>

    <!-- more -->
    <section class="w-full">
      <h1 class="section-header text-xl my-3 mt-10">
        more
      </h1>
      <AboutMore />
    </section>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import About from '~/components/organisms/about/About'
import AboutMore from '~/components/organisms/about/AboutMore'

export default {
  components: {
    About,
    AboutMore
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'about',
        description:
          '自己紹介とか好きなものについてのページ - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/about'
      }
    }
  }
}
</script>
