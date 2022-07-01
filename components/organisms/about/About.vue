<template>
  <div class="flex flex-col md:flex-row items-center">
    <img
      v-lazy="icon"
      class="flex-shrink-0 w-56 h-56 mb-5 sm:mr-10 sm:mb-0 rounded-full"
      alt="icon"
    />

    <div class="flex flex-col justify-around">
      <div
        class="font-ja font-semibold my-1 text-xl flex flex-col sm:flex-none sm:flex-row"
      >
        <span>
          加藤かな<span class="font-ubuntu text-sm ml-3">( kana@kxn4t )</span>
        </span>
        <span class="light-font-color sm:ml-3">
          <span class="font-ubuntu text-xs"
            >[illustrated by
            <span class="font-ja text-xs"
              >れい亜
              <a
                href="https://twitter.com/aosorayuri24"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="れい亜さんのTwitterを開く"
                class="link inline-block"
                ><i class="fas fa-external-link-alt"></i></a
              >]</span
            >
          </span>
        </span>
      </div>
      <div class="font-ja">
        <p>関東在住の美少女エンジニア。</p>
        <p>
          プログラムを書くよりもどちらかといえば機能の設計やいろいろ調整などが得意。
        </p>
        <p>認証周りをよく触っていて、特にSAMLに強みを持っている。</p>
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
    RoundLinkButtons,
  },
  data() {
    return {
      icon: require('~/assets/images/icon.png'),
      accounts: [
        {
          link: 'https://twitter.com/kxn4t',
          label: 'twitter account',
          iconClass: 'icon-twitter',
          iconElement: '<i class="fab fa-twitter"></i>',
        },
        {
          link: 'https://github.com/kxn4t',
          label: 'github account',
          iconClass: 'icon-github',
          iconElement: '<i class="fab fa-github"></i>',
        },
        {
          link: 'https://qiita.com/kxn4t',
          label: 'qiita account',
          iconClass: 'icon-qiita',
          iconElement: '<span class="font-ja font-bold">Q</span>',
        },
        {
          link: 'https://zenn.dev/kxn4t',
          label: 'zenn account',
          iconClass: 'icon-zenn',
          iconElement: '<span class="font-ja font-bold">Z</span>',
        },
        {
          link: 'https://kxn4t.hatenablog.com/',
          label: 'blog account',
          iconClass: 'icon-hatenablog',
          iconElement: '<i class="fas fa-blog"></i>',
        },
      ],
    }
  },
}
</script>
