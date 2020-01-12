<template>
  <div class="flex flex-col md:flex-row items-center">
    <img
      src="~/assets/images/icon.jpg"
      class="fade-in flex-shrink-0 w-56 h-56 mb-5 sm:mr-10 sm:mb-0 rounded-full bg-blue-200"
    />

    <div class="flex flex-col justify-around">
      <div class="font-ja font-semibold text-xl my-1">
        加藤かな<span class="font-ubuntu text-sm ml-3">( kana@kxn4t )</span>
      </div>
      <div class="font-ja">
        <p>都内在住の美少女エンジニア。</p>
        <p>
          プログラムを書くよりも機能の設計などが得意で、最近はプロダクトオーナーとして色々やってる。
        </p>
        <p>
          本当のところはプログラムばりばり書けるマンになりたい。
        </p>
        <p>
          ボードゲームをやったり、最近はおめシスの動画をひたすら見るのが生きがい。
          ただのオタク。
        </p>
      </div>

      <RoundLinkButtons
        :items="accounts"
        class="flex justify-around sm:justify-start mt-3"
      />
    </div>
  </div>
</template>

<script>
import RoundLinkButtons from '~/components/molecules/RoundLinkButtons'

export default {
  components: {
    RoundLinkButtons
  },
  data() {
    return {
      accounts: [
        {
          link: 'https://twitter.com/kxn4t',
          iconClass: 'icon-twitter',
          iconElement: '<i class="fab fa-twitter"></i>'
        },
        {
          link: 'https://mastodon.kxn4t.tech/@kxn4t',
          iconClass: 'icon-mastodon',
          iconElement: '<i class="fab fa-mastodon"></i>'
        },
        {
          link: 'https://github.com/kxn4t',
          iconClass: 'icon-github',
          iconElement: '<i class="fab fa-github"></i>'
        },
        {
          link: 'https://qiita.com/kxn4t',
          iconClass: 'icon-qiita',
          iconElement: '<span class="font-ja font-bold">Q</span>'
        },
        {
          link: 'https://kxn4t.hatenablog.com/',
          iconClass: 'icon-hatenablog',
          iconElement: '<i class="fas fa-blog"></i>'
        }
      ]
    }
  }
}
</script>
