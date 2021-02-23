<template>
  <div class="flex flex-col md:flex-row items-center">
    <div class="super-ellipse mb-5 sm:mr-10 sm:mb-0">
      <img v-lazy="icon" class="flex-shrink-0" alt="icon" />
    </div>

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
      icon: require('~/assets/images/icon.jpg'),
      accounts: [
        {
          link: 'https://twitter.com/kxn4t',
          label: 'twitter account',
          iconClass: 'icon-twitter',
          iconElement: '<i class="fab fa-twitter"></i>'
        },
        {
          link: 'https://mastodon.kxn4t.tech/@kxn4t',
          rel: 'me',
          label: 'mastodon account',
          iconClass: 'icon-mastodon',
          iconElement: '<i class="fab fa-mastodon"></i>'
        },
        {
          link: 'https://github.com/kxn4t',
          label: 'github account',
          iconClass: 'icon-github',
          iconElement: '<i class="fab fa-github"></i>'
        },
        {
          link: 'https://qiita.com/kxn4t',
          label: 'qiita account',
          iconClass: 'icon-qiita',
          iconElement: '<span class="font-ja font-bold">Q</span>'
        },
        {
          link: 'https://kxn4t.hatenablog.com/',
          label: 'blog account',
          iconClass: 'icon-hatenablog',
          iconElement: '<i class="fas fa-blog"></i>'
        }
      ]
    }
  }
}
</script>

<style scoped>
.super-ellipse {
  transform: rotate(-19deg);
  border-radius: 43% 57% 43% 57% / 57% 43% 57% 43%;
  overflow: hidden;
}
.super-ellipse img {
  width: 100%;
  height: 100%;
  transform: rotate(19deg);
}
</style>
