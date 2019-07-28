<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Волонтеры</h1>

    <v-simple-table class="elevation-2">
      <thead>
        <tr>
          <th class="text-left">ФИО</th>
          <th class="text-left">Пол</th>
          <th class="text-left">Дата рождения</th>
          <th class="text-center">Телефон</th>
          <th class="text-right">Навыки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in volunteers" :key="item._id" @click="goToObj(item._id)">
          <td>{{ item.FIO }}</td>
          <td>{{ item.Gender }}</td>
          <td>{{ item.BD }}</td>
          <td class="text-center">{{ item.Phone }}</td>
          <td class="text-right">{{ item.Skills }}</td>
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
      volunteers: []
    }
  },
  methods: {
    goToObj (id) {
      router.push('/volunteers/' + id)
    },
  },
  created: function () {
    HTTP.get('volunteers')
    .then(response => {
      this.volunteers = response.data
      console.log(response.data)
    })
  }
}
</script>
