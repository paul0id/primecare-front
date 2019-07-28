<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Пользователи</h1>

    <v-simple-table class="elevation-2">
      <thead>
        <tr>
          <th class="text-left">ФИО</th>
          <th class="text-left">Состояние здоровья</th>
          <th class="text-left">Пол</th>
          <th class="text-left">Дата рождения</th>
          <th class="text-center">Телефон</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usersdata" :key="item._id" @click="goToObj(item._id)">
          <td>{{ item.FIO }}</td>
          <td>{{ item.Healthstatus }}</td>
          <td>{{ item.Gender }}</td>
          <td>{{ item.BD }}</td>
          <td class="text-center">{{ item.Phone }}</td>
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
      usersdata: []
    }
  },
  methods: {
    goToObj (id) {
      router.push('users/' + id)
    },
  },
  created: function () {
    HTTP.get('usersdata')
    .then(response => {
      this.usersdata = response.data
      console.log(response.data)
    })
  }
}
</script>
