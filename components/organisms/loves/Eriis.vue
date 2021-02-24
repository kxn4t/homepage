<template>
  <div class="font-ja">
    <p>山崎エリイちゃんが好き。</p>
    <p>
      every♥ing!の解散をライブ会場で聞いたときは泣き崩れてしまったけど、そのままエリイちゃんのオタクになった。
    </p>
    <Cards :items="items" />
  </div>
</template>

<script>
import Cards from '~/components/molecules/Cards'

export default {
  components: {
    Cards,
  },
  data() {
    return {
      items: [
        {
          img: '',
          link: 'https://youtu.be/Wr8GkYBx_q8',
          title: '十代交響曲',
          content:
            'エリイちゃん名義での1stシングル。ライブでも盛り上がる曲。十代という未完成な年代での迷いや葛藤について力強い歌唱力で歌ってて良い。',
          tags: [],
        },
        {
          img: '',
          link: 'https://youtu.be/WjfQ-sDBbGQ',
          title: 'a little little thing',
          content:
            'りるりるはかわいい。かわいい。サビのダンス部分が妙にくせになる。個人的にはちゅるちゅるちゅちゅちゅを想起してしまう。',
          tags: [],
        },
        {
          img: '',
          link: 'https://youtu.be/Hh5b_PlP3oQ',
          title: 'Remember me?',
          content:
            'Erii名義での2ndシングル。今までとは打って変わってロックテイストな曲。普段はふにゃふにゃのかわいらしいイメージが強いんだけど、音楽となると演奏に負けないくらい強いのがかっこいい。',
          tags: [],
        },
      ],
    }
  },
}
</script>
