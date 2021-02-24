<template>
  <div>
    <section class="mb-10 w-full">
      <h1 class="section-header text-xl my-4 mt-8">
        <i class="fas fa-comment accent-font-color text-base"></i>
        <span class="font-ja">お手伝いできるかもしれないこと</span>
      </h1>
      <div class="font-ja">
        <p>土日しか稼働できないため、大きなものや短納期なものは難しいです。</p>
        <p class="mb-6">
          どちらも本格的なものというより、まずは一歩踏み出してみるきっかけづくりがメインです。
        </p>
        <ul class="list-disc list-inside">
          <li>プロジェクト管理ツール導入による業務改善/DX相談</li>
          <li>アジャイル/スクラムの導入支援</li>
          <li>プロダクトオーナー支援</li>
          <li>Spring Frameworkを用いたサーバーサイドの開発</li>
          <li>簡単なホームページ製作/改修<br />など</li>
        </ul>
      </div>
    </section>
    <section class="mb-10 sm:mb-0 w-full">
      <section
        class="w-full flex flex-col md:flex-row justify-around items-center"
      >
        <HeaderedList
          v-for="(item, index) in items"
          :key="index"
          :header="item.header"
          :header-icon-classes="item.headerIconClasses"
          :list="item.list"
        />
      </section>
    </section>
  </div>
</template>

<script>
import HeaderedList from '~/components/atoms/HeaderedList'

export default {
  components: {
    HeaderedList,
  },
  data() {
    return {
      items: [
        {
          header: 'HP制作',
          headerIconClasses: ['fas', 'fa-wrench'],
          list: ['WordPress', 'Nuxt.js'],
        },
        {
          header: '言語/FW',
          headerIconClasses: ['fas', 'fa-laptop-code'],
          list: ['Java', 'Kotlin', 'Spring'],
        },
        {
          header: '業務ツール',
          headerIconClasses: ['fas', 'fa-tasks'],
          list: ['Backlog', 'Cacoo', 'Typetalk'],
        },
      ],
    }
  },
}
</script>

<style scoped>
li {
  margin-left: 1.4em;
  text-indent: -1.4em;
  margin-bottom: 0.5em;
}
</style>
