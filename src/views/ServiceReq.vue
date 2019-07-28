<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Обращение</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6">
          <h3 class="mb-4">Заголовок:</h3>
          <p>{{request.title}}</p>
          <h3 class="mb-4">Описание: </h3>
          <p>{{request.description}}</p>
          <h3 class="mb-4">Время обращения:</h3>
          <p>{{request.timestamp}}</p>
          <h3 class="mb-4">Время для выполнения:</h3>
          <p>{{request.desiredtime}}</p>
          <h3 class="mb-4">Вознаграждение: </h3>
          <p>{{request.price}}</p>
          <h3 class="mb-4">Статус ображения:</h3>
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
          <h3 class="mb-4">Адрес: </h3>
          <p>{{request.address}}</p>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { statehelper } from '@/statehelper'
import { HTTP } from '@/http-common';
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
    HTTP.get('servicerequests/' + this.id)
    .then(response => {
      this.request = response.data
      console.log(response.data)
    })
  },
  watch: {
    request () {
      this.state = statehelper(this.request.status)
    }
  }
}
</script>
