<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Запрос на помощь</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6">
          <h3 class="mb-4">Время обращения:</h3>
          <p>{{request.timestamp}}</p>
          <h3 class="mb-4">Статус обращения:</h3>
          <StateHelper :state='request.status'/>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="pa-6">
          <h3 class="mb-4">Местоположение:</h3>
          <p>{{request.latlon}}</p>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { HTTP } from '@/http-common';
export default {
  props: ['id'],
  data () {
    return {
      request: {}
    }
  },
  created: function () {
    HTTP.get('urgentrequests/' + this.id)
    .then(response => {
      this.request = response.data
      console.log(response.data)
    })
  },
  // watch: {
  //   requests () {
  //     this.requests.forEach(request => {
  //       request.state = statehelper(request.state)
  //     })
  //   }
  // },
}
</script>
