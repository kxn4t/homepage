<template>
  <div class="font-ja">
    <p>
      そこそこ読むけど、硬派な感じのは苦手。きらら系が好き。あとはラブコメが好きなのかも。すぐ尊くなってしまう…。
    </p>
    <p>
      最近個人的に熱い系を含めつつ挙げるとすればこんな感じ。
    </p>

    <Cards :items="items" />
    <p>
      他に最近だと、僕の心のヤバイやつ、2.5次元の誘惑、ランウェイで笑って、カッコウの許嫁、久保さんは僕を許さない、
      薬屋のひとりごと、珈琲をしづかに、葬送のフリーレンとかも好き。
    </p>
    <p>
      異世界転生もの読みすぎてどれがどれだったかわからなくなってきてる。
    </p>
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
          link:
            'https://www.amazon.co.jp/gp/product/B07N3NRSKF/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07N3NRSKF&linkCode=as2&tag=midway00-22&linkId=03a8963d62d64b10d5d1cdfccae1399a',
          title: 'ぼっち・ざ・ろっく！',
          content:
            'いいいいいイキってすみません…。ここ数年で一番笑った漫画。最高に面白い。好きでしかない。素材が豊富でLINEスタンプも最高に使い勝手がいい。陰キャなのでロックをやりたいと思います。アニメ化おめでとう！！(既刊3巻)',
          tags: []
        },
        {
          img: '',
          link:
            'https://www.amazon.co.jp/gp/product/B013FVA8IO/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B013FVA8IO&linkCode=as2&tag=midway00-22&linkId=51f0fbbf4a7159f85d55b5630e1260a7',
          title: '箱入りドロップス',
          content:
            'どうしてアニメ化しないのかが不思議な作品No.1。徐々にお互いを意識していくなかで、あの最終巻。思わず号泣しながら読みました…。みんな幸せそうで何より。本当に本当にいい作品だった。(全6巻)',
          tags: []
        },
        {
          img: '',
          link:
            'https://www.amazon.co.jp/gp/product/4757559208/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4757559208&linkCode=as2&tag=midway00-22&linkId=5a9d9ce0147e7e7f6d76642abcd06d8c',
          title: 'その着せ替え人形は恋をする',
          content:
            '恋心に気づいてからのイチャイチャ加減がたまらない一品。ギャルという見た目に反して好きなものに対してとことん真剣な喜多川さんが美少女すぎてつらい。。。(既刊6巻)',
          tags: []
        },
        {
          img: '',
          link:
            'https://www.amazon.co.jp/gp/product/4065162238/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4065162238&linkCode=as2&tag=midway00-22&linkId=f6818fdad8ed982a3ff6678719064245',
          title: '可愛いだけじゃない式守さん',
          content:
            '式守さんは可愛くて優しくてそして強いイケメン彼女だけど、和泉くんのふとした行動でとたんに可愛いギャップにニヤニヤが止まらない…。(既刊7巻)',
          tags: []
        },
        {
          img: '',
          link:
            'https://www.amazon.co.jp/gp/product/B07FSM2K3F/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07FSM2K3F&linkCode=as2&tag=midway00-22&linkId=1008a2d05c8d03f7ad8cf4c788991adc',
          title: '未熟なふたりでございますが',
          content:
            'お互い未経験でそのまま新婚生活が始まってしまった話。とにかくピュアなイチャイチャが堪能できて眼福。テレ顔がものすごく可愛くてたまらない…。(既刊8巻)',
          tags: []
        },
        {
          img: '',
          link:
            'https://www.amazon.co.jp/gp/product/4901926896/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4901926896&linkCode=as2&tag=midway00-22&linkId=2827fccbc6cf87382e2e4e2e16aef66f',
          title: 'ARIA (+AQUA)',
          content:
            '元気がなくなったときに読む。人生のバイブル。本当にARIAには何度救われたかわからない…。今まで生きてこれたのは間違いなくARIAのおかげ。明日からまた頑張ろう。(全2+12巻)',
          tags: ['アリス・キャロル']
        }
      ]
    }
  }
}
</script>
