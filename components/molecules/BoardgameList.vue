<template>
  <div class="w-full">
    <div v-if="loading" class="flex justify-center">
      <i class="fas fa-spinner fa-2x fa-spin py-4"></i>
    </div>
    <table v-if="!loading" class="table-fixed w-full text-sm">
      <thead>
        <tr>
          <th class="w-5/12 px-2 py-2">タイトル</th>
          <th class="w-2/12 px-2 py-2">プレイ人数</th>
          <th class="w-2/12 px-2 py-2">プレイ時間</th>
          <th class="w-1/12 px-2 py-2">拡張</th>
          <th class="w-2/12 px-2 py-2">プレイ済</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="py-2 pl-6 text-left">{{ item.title }}</td>
          <td class="py-2">
            <span v-if="item.min == item.max">{{ item.min }}人</span>
            <span v-else>{{ item.min }}〜{{ item.max }}人</span>
          </td>
          <td class="py-2">
            <span v-if="item.min_time == item.max_time">
              {{ item.min_time }}分
            </span>
            <span v-else>{{ item.min_time }}〜{{ item.max_time }}分</span>
          </td>
          <td class="py-2">
            <span v-if="item.expand">
              <i class="fas fa-dice"></i>
            </span>
          </td>
          <td class="py-2">
            <span v-if="item.played">
              <i class="fas fa-check"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const csvParse = require('csv-parse/lib/sync')

export default {
  data() {
    return {
      loading: true,
      items: [],
    }
  },
  async mounted() {
    try {
      const csv = await this.$axios.$get(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vQv-7At5XPQI9D5wMyJLqlQR_EnlOGbBIqfNepFJIv2f834xU_vtxNwP8D7j5Hn1eCUeplSbgEjt_hB/pub?gid=0&single=true&output=csv'
      )
      this.items = csvParse(csv, { columns: true })
      this.loading = false
    } catch (error) {
      // noop
    }
  },
}
</script>
