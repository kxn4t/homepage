<template>
  <section
    class="w-full flex mb-5 sm:mb-0 flex-col md:flex-row justify-around items-center"
  >
    <HeaderedList
      v-for="(item, index) in items"
      :key="index"
      :header="item.header"
      :header-icon-classes="item.headerIconClasses"
      :list="item.list"
    />
  </section>
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
          header: 'すきなもの',
          headerIconClasses: ['fas', 'fa-heart'],
          list: ['加藤恵', '山崎エリイ', 'ボードゲーム', 'プリコネR'],
        },
        {
          header: '趣味',
          headerIconClasses: ['fas', 'fa-gamepad'],
          list: ['ゲーム / ボードゲーム', 'アニメ', '写真', 'ぐうたら'],
        },
        {
          header: '言語',
          headerIconClasses: ['fas', 'fa-laptop-code'],
          list: ['Java', 'kotlin'],
        },
      ],
    }
  },
}
</script>
