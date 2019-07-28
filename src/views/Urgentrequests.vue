<template>
  <div>
    <pre>

    </pre>
    <h1 class="display-1 page-title mb-4">Вызовы службы 112</h1>

    <v-simple-table class="elevation-2">
      <thead>
        <tr>
          <th class="text-left">Время вызова</th>
          <th class="text-left">Статус</th>
          <th class="text-right">Местоположение пациента</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in requests" :key="item.name" @click="goToObj(item._id)">
          <td>{{ item.timestamp }}</td>
          <td class="text-left">{{ item.status }}</td>
          <td class="text-right">{{ item.latlon }}</td>
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
      router.push('urgentrequests/' + id)
    },
  },
  created () {
    HTTP.get('urgentrequests')
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
