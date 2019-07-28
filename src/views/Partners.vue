<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Партнеры</h1>

    <v-simple-table class="elevation-2">
      <thead>
        <tr>
          <th class="text-left">Название</th>
          <th class="text-left">Услуги</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in partners" :key="item.name" @click="goToObj(item._id)">
          <td>{{ item.Caption }}</td>
          <td>{{ item.Services }}</td>
        </tr>
      </tbody>
    </v-simple-table>

  </div>
</template>

<script>
import router from '@/router'
import { HTTP } from '@/http-common';
export default {
  data () {
    return {
      partners: []
    }
  },
  methods: {
    goToObj (id) {
      router.push('/partners/' + id)
    },
  },
  created: function () {
    HTTP.get('partners')
    .then(response => {
      this.partners = response.data
      console.log(response.data)
    })
  }
}
</script>
