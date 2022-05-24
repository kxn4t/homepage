<template>
  <div class="pt-4">
    <!-- SAML -->
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <img
        v-lazy="samlFanzine"
        class="flex-shrink-0 w-40 mb-5 sm:ml-10 sm:mr-10 sm:mb-0 shadow-lg"
        alt="saml fanzine"
      />

      <div class="flex flex-col justify-around">
        <div class="my-1">
          <div>
            <Label>同人誌</Label>
          </div>
          <span class="font-ja font-semibold text-xl">SAML入門</span>
          <a
            href="https://introduction-to-saml.tumblr.com/"
            rel="noreferrer noopener"
            aria-label="SAML入門公式サイト"
            target="_blank"
            class="link ml-2 inline-block font-ja text-xs"
            >公式サイト <i class="fas fa-external-link-alt"></i>
          </a>
        </div>

        <div class="font-ja">
          <p>日本初のSAMLに関する書籍を執筆しました。</p>
          <p>
            SAMLはエンタープライズ用途では求められることが非常に多く、歴史もそれなりに長いものですが、実装する上で必要な体系的な情報はなぜかほとんどありませんでした。
          </p>
          <p>
            そんなSAMLの仕様を読み込み、最低限必要となる知識を詰め込んだ珠玉の一冊です。
          </p>
          <p>ZennやBOOTH、技術書典オンラインマーケットにて好評頒布中。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Label from '~/components/atoms/Label.vue'

export default {
  components: {
    Label,
  },
  data() {
    return {
      samlFanzine: require('~/assets/images/saml-fanzine-cover.png'),
    }
  },
}
</script>
