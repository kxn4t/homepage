<template>
  <!-- contact -->
  <section class="w-full">
    <h1 class="section-header text-3xl my-5 sm:mt-5 sm:mb-8">
      contact
    </h1>
    <p class="font-ja mb-6">お問い合わせはこちらから。</p>
    <p class="font-ja">
      現在、週半日程度の稼働でもよければ、副業を募集しております。
    </p>
    <p class="font-ja">
      また、その他のご依頼でもお気軽にご相談ください。
    </p>
    <ContactDescription />
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
    ContactForm
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'contact',
        description:
          'お問い合わせのページ - かなめりぜは、加藤かな (@kxn4t) が活動するサークルおよびWebサイトです。',
        type: 'article',
        url: 'https://kanameliser.net/contact'
      }
    }
  }
}
</script>
