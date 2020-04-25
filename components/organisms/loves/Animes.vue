<template>
  <div class="font-ja">
    <p>
      アニメはわりと見る。毎クール10作品くらいは見てる気がする。
    </p>
    <p>
      なろうなどの異世界転生ものが大好物。
    </p>
    <Cards :items="items" />
    <p>
      他には野崎くんとか、未確認で進行形とかも好き。基本的に動画工房は好き。
    </p>
    <a
      href="https://annict.jp/@kxn4t/watched"
      target="_blank"
      rel="noreferrer noopener"
      class="link block pt-2"
      >見たアニメ一覧</a
    >
  </div>
</template>

<script>
import Cards from '~/components/molecules/Cards'

export default {
  components: {
    Cards
  },
  data() {
    return {
      items: [
        {
          img: '',
          title: '冴えない彼女の育て方',
          content:
            '加藤恵。加藤恵に尽きる。ここまで好きになったキャラクターは過去いないくらいに好き。もちろん劇場版の小説はコンプした。家の玄関を開けると即加藤恵に会えるようにしてある程度には好き。',
          tags: ['加藤恵']
        },
        {
          img: '',
          title: 'グレンラガン',
          content:
            'ロボットものはそんなに好きではないのだけど、これは好き。めっちゃ熱い。空色デイズの歌詞はすごい。アニメを見終わってから聴くとぐっとくる。ありがとうmegrock。',
          tags: []
        },
        {
          img: '',
          title: '瀬戸の花嫁',
          content:
            '任侠と書いて人魚と読むきん！原作は散々だけど、アニメはめっちゃ面白かった。パロディが若干多いかなと思うけど、ギャグとテンポの良さがピカイチ。好き。',
          tags: ['瀬戸燦']
        },
        {
          img: '',
          title: '涼宮ハルヒの憂鬱',
          content:
            'これでわたしはオタクになりました。見る前に西宮北高には入ったことがあったので、うわめっちゃ知ってる！！ってなったのはいい思い出。VIPスレ住民だった。',
          tags: ['涼宮ハルヒ']
        },
        {
          img: '',
          title: 'SHIROBAKO',
          content:
            'こんなにも仕事がしたいって思えるアニメはすごい。杉江さん回は名作。自分も作る側の人間なので身の引き締まる思い。どんどんどーなつどーんといきたい。',
          tags: []
        },
        {
          img: '',
          title: 'アイカツスターズ！',
          content:
            '無印も面白かったけど、個人的にはスターズが好き。スターズはずっと面白いのがすごい。曲もどれもいいし、作画もすごい。あこがれは次のあこがれを生む。本当に感謝しかない。',
          tags: ['白銀リリイ']
        }
      ]
    }
  }
}
</script>
