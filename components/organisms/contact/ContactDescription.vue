<template>
  <div>
    <section class="mb-6 w-full">
      <h1 class="section-header text-xl my-4 mt-8">
        <i class="fas fa-comment accent-font-color text-base"></i>
        <span class="font-ja">お手伝いできるかもしれないこと</span>
      </h1>
      <div class="font-ja">
        <p class="mb-6">
          週に半日程度しか稼働できないため、大きなものや短納期なものは難しいです。
        </p>
        <ul class="list-disc list-inside">
          <li>SAMLに関する相談</li>
          <li>認証周りの開発支援<br />など</li>
        </ul>
      </div>
    </section>
    <section class="w-full">
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
    <div class="mb-10 w-full">
      <h2 class="section-header text-lg my-4 mt-8 sm:mt-0">
        <span class="font-ja">人気のご相談例</span>
      </h2>
      <p class="mb-6 font-ja">
        「SAMLを実装する上で発生した疑問点を解決したい、詳しい人に直接聞けば解決しそう。」といった場合は次のような流れで対応いたします。
      </p>
      <ol class="list-decimal list-inside font-ja">
        <li>依頼したい内容や条件面の確認・すり合わせ</li>
        <li>メールによる事前ヒアリング</li>
        <li>回答の準備（2,3日程度）</li>
        <li>Web会議による相談（1〜2時間程度）</li>
      </ol>
    </div>
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
          header: '認証',
          headerIconClasses: ['fas', 'fa-key'],
          list: ['SAML（一番得意）', 'WebAuthn（自信なし）'],
        },
        {
          header: '言語/FW',
          headerIconClasses: ['fas', 'fa-laptop-code'],
          list: ['Java', 'Kotlin', 'Spring Framework'],
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
