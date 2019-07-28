<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Свободные обращения</h1>

    <v-simple-table class="elevation-2">
      <thead>
        <tr>
          <th class="text-left">Название</th>
          <th class="text-left">Время вызова</th>
          <th class="text-left">Время для выполнения</th>
          <th class="text-left">Статус</th>
          <th class="text-left">Адрес</th>
          <th class="text-right">Вознаграждение</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in requests" :key="item.name" @click="goToObj(item._id)">
          <td>{{ item.title }}</td>
          <td>{{ item.timestamp }}</td>
          <td>{{ item.desiredtime }}</td>
          <td class="text-left">
            {{ item.status }}</td>
          <td>{{ item.address }}</td>
          <td class="text-right">{{ item.price }}</td>
        </tr>
      </tbody>
    </v-simple-table>

  </div>
</template>

<script>
import router from '@/router'
import { HTTP } from '@/http-common';
import { statehelper } from '@/statehelper'
export default {
  data () {
    return {
      requests: []
    }
  },
  methods: {
    goToObj (id) {
      router.push('servicerequests/' + id)
    },
  },
  created: function () {
    HTTP.get('servicerequests')
    .then(response => {
      this.requests = response.data
      console.log(response.data)
    })
  },
  watch: {
    requests () {
      this.requests.forEach(request => {
        request.status = statehelper(request.status)
      })
    }
  },
}
</script>
