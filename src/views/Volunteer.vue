<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Волонтер</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6">
          <h3 class="mb-4">ФИО:</h3>
          <p>{{vol.FIO}}</p>
          <h3 class="mb-4">Телефон:</h3>
          <p>{{vol.Phone}}</p>
          <h3 class="mb-4">Навыки:</h3>
          <p>{{vol.Skills}}</p>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="pa-6">
          <h3 class="mb-4">Рейтинг: </h3>
          <p>{{rating}}</p>
          <h3 class="mb-4">Дата рождения: </h3>
          <p>{{vol.BD}}</p>
          <h3 class="mb-4">Пол:</h3>
          <p>{{vol.Gender}}</p>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// import router from '@/router'
import { HTTP } from '@/http-common';

export default {
  props: ['id'],
  data () {
    return {
      vol: {},
      rating: 0
    }
  },
  created: function () {
    HTTP.get('volunteers/' + this.id)
    .then(response => {
      this.vol = response.data
      console.log(response.data)
    })
    this.rating = Math.floor(Math.random() * 10);
  }
}
</script>
