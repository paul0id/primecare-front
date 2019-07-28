<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Запрос на помощь</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6">
          <h3 class="mb-4">Время обращения:</h3>
          <p>{{request.timestamp}}</p>
          <h3 class="mb-4">Статус обращения:</h3>

          <v-select
            :items="requestStatuses"
            label="Статус"
            :value="state"
            outlined
          ></v-select>

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
import { statehelper } from '@/statehelper'
export default {
  props: ['id'],
  data () {
    return {
      request: {},
      requestStatuses: ["Отправлено ⚠️","Запланировано 🕓", "Выполняется 🕓","Выполнено ✅","Отменено ❌"],
      state: "Отправлено ⚠️"
    }
  },
  created: function () {
    HTTP.get('urgentrequests/' + this.id)
    .then(response => {
      this.request = response.data
      console.log(response.data)
    })
  },
  watch: {
    request () {
      this.state = statehelper(this.request.status)
    }
  },
}
</script>
