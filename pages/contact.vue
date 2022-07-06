<template>
  <!-- contact -->
  <section class="w-full">
    <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">contact</h1>
    <div class="font-ja">
      <p class="mb-6">お問い合わせはこちらから。</p>
      <p>現在、週半日程度の稼働でもよければ、副業を募集しております。</p>
      <p>また、その他のご依頼でもお気軽にご相談ください。</p>
    </div>
    <ContactDescription />
    <div class="font-ja mb-6">
      <p>
        問い合わせの際は、簡単にでよいので依頼内容について記載いただけると助かります。
      </p>
      <p>
        継続的な依頼の場合、現在の勤め先によるチェックが入るため、実際の稼働まで少しお時間がかかる可能性があります。
      </p>
      <p>
        また、現在の勤め先と競合に当たる場合、お受けできませんのでご了承ください。
      </p>
      <p>
        ※2,3日以上連絡が無い場合はフォームが正常に送信出来ていない可能性がありますので、お手数おかけしますがTwitterでご連絡ください。
      </p>
    </div>
    <ContactForm />
  </section>
</template>

<script>
import Meta from '~/assets/mixins/meta'
import ContactDescription from '~/components/organisms/contact/ContactDescription'
import ContactForm from '~/components/organisms/contact/ContactForm'

export default {
  components: {
    ContactDescription,
    ContactForm,
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'contact',
        description:
          'お問い合わせのページ - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/contact',
      },
    }
  },
}
</script>
