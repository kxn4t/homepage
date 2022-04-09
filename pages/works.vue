<template>
  <article>
    <!-- about -->
    <section class="w-full">
      <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">works</h1>
      <Works />
    </section>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import Works from '~/components/organisms/works/Works'

export default {
  components: {
    Works,
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'works',
        description:
          '書籍や実績についてのページ - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/works',
      },
    }
  },
}
</script>
