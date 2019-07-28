<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Партнер</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6">
          <h3 class="mb-4">Название:</h3>
          <p class="name">{{partner.Caption}}</p>
          <h3 class="mb-4">Услуги:</h3>
          <p>{{partner.Services}}</p>
          <h3 class="mb-4">Время работы:</h3>
          <p>{{partner.WorkTime}}</p>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="pa-6">
          <h3 class="mb-4">Адрес: </h3>
          <p>{{partner.Address}}</p>
          <h3 class="mb-4">Контакты:</h3>
          <p>{{partner.Contacts}}</p>
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
      partner: {}
    }
  },
  created: function () {
    HTTP.get('partners/' + this.id)
    .then(response => {
      this.partner = response.data
      console.log(response.data)
    })
  }
}
</script>
