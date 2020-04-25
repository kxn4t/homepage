<template>
  <article>
    <!-- boardgame -->
    <section class="w-full">
      <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">
        boardgame
      </h1>
      <div class="font-ja">
        <p>持っているボードゲーム一覧</p>
        <BoardgameList class="py-4" />
      </div>
    </section>
  </article>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import BoardgameList from '~/components/molecules/BoardgameList'

export default {
  components: {
    BoardgameList
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'boardgame',
        description:
          '持っているボードゲーム一覧 - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/boardgame/list'
      }
    }
  }
}
</script>
