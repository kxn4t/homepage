<template>
  <div>
    <section class="mb-5 w-full">
      <h1 class="section-header text-xl my-4 mt-8">
        <i class="fas fa-comment accent-font-color text-base"></i>
        お手伝いできるかもしれないこと
      </h1>
      <div class="font-ja">
        <p class="mb-6">
          土日しか稼働できないため、大きなものや短納期なものは難しいです。
        </p>
        <ul class="list-disc list-inside">
          <li>
            プロジェクト管理ツール導入による業務改善<br />色々お役に立てると思います
          </li>
          <li>Spring Frameworkを用いたサーバーサイドの開発</li>
          <li>
            Vue.js/Nuxt.jsを用いたフロントエンドの開発<br />これは全然自信がないです
          </li>
          <li>このサイトのような簡単なホームページ製作</li>
          <li>Mastodonサーバーの構築</li>
          <li>
            なにか作りたいけどどうすればいいか分からない、などへのアドバイス
          </li>
        </ul>
      </div>
    </section>
    <section class="mb-5 w-full">
      <section
        class="w-full flex flex-col md:flex-row justify-around items-center"
      >
        <HeaderedList
          v-for="(item, index) in items"
          :key="index"
          :header="item.header"
          :headerIconClasses="item.headerIconClasses"
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
    HeaderedList
  },
  data() {
    return {
      items: [
        {
          header: '使用IDE',
          headerIconClasses: ['fas', 'fa-wrench'],
          list: ['IntelliJ IDEA', 'VS Code']
        },
        {
          header: '言語',
          headerIconClasses: ['fas', 'fa-laptop-code'],
          list: ['Java', 'Kotlin', 'Vue.js']
        },
        {
          header: '業務ツール',
          headerIconClasses: ['fas', 'fa-tasks'],
          list: ['Backlog', 'Cacoo', 'Typetalk']
        }
      ]
    }
  }
}
</script>

<style scoped>
li {
  margin-left: 1.4em;
  text-indent: -1.4em;
  margin-bottom: 0.5em;
}
</style>
