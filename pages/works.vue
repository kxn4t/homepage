<template>
  <article>
    <!-- works -->
    <section class="w-full mb-10 sm:mb-5">
      <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">works</h1>
      <!-- books -->
      <section class="mb-5 w-full">
        <h1 class="section-header text-xl my-4 mt-8">
          <i class="fas fa-book accent-font-color text-base"></i> books
        </h1>
        <Books class="m-0 sm:m-2" />
      </section>
    </section>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import Books from '~/components/organisms/works/Books'

export default {
  components: {
    Books,
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
