<template>
  <article>
    <!-- more -->
    <section class="w-full">
      <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">
        more
      </h1>
      <p class="font-ja">好きなものとかについてもっと早口で語る。</p>
      <!-- boardgame -->
      <section class="mb-5 w-full">
        <h1 class="section-header text-xl my-4 mt-8">
          <i class="fas fa-dice accent-font-color text-base"></i> boardgame
        </h1>
        <BoardGames class="m-0 sm:m-2" />
      </section>
      <!-- manga -->
      <section class="mb-5 w-full">
        <h1 class="section-header text-xl my-4 mt-8">
          <i class="fas fa-book-open accent-font-color text-base"></i> manga
        </h1>
        <Mangas class="m-0 sm:m-2" />
      </section>
      <!-- anime -->
      <section class="mb-5 w-full">
        <h1 class="section-header text-xl my-4 mt-8">
          <i class="fas fa-video accent-font-color text-base"></i> anime
        </h1>
        <Animes class="m-0 sm:m-2" />
      </section>
      <!-- erii -->
      <section class="w-full">
        <h1 class="section-header text-xl my-4 mt-8">
          <i class="fas fa-music accent-font-color text-base"></i> Erii
        </h1>
        <Eriis class="m-0 sm:m-2 sm:mb-0" />
      </section>
    </section>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import BoardGames from '~/components/organisms/more/BoardGames'
import Animes from '~/components/organisms/more/Animes'
import Mangas from '~/components/organisms/more/Mangas'
import Eriis from '~/components/organisms/more/Eriis'

export default {
  components: {
    BoardGames,
    Animes,
    Mangas,
    Eriis
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'more',
        description:
          '好きなものとかについてもっと早口で語るページ - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/more'
      }
    }
  }
}
</script>
