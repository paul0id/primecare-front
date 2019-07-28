<template>
  <div>
    <h1 class="display-1 page-title mb-4 mt-4">Волонтер</h1>
    <v-layout wrap>
      <v-flex md8>
        <v-card class="pa-6 mb-2">
          <h3 class="mb-4">ФИО:</h3>
          <p>{{userdata.FIO}}</p>
          <h3 class="mb-4">Телефон:</h3>
          <p>{{userdata.Phone}}</p>
        </v-card>
        <v-card class="pa-6">
          <h2 class="mt-3">Медкарта</h2>
          <hr class="my-4">
          <h3 class="mb-4">Группа крови:</h3>
          <p>{{userdata.Blood}}</p>
          <h3 class="mb-4">Группа крови:</h3>
          <p>{{userdata.Healthstatus}}</p>
          <h3 class="mb-4">Рост:</h3>
          <p>{{userdata.Height}}</p>
          <h3 class="mb-4">Вес:</h3>
          <p>{{userdata.Weight}}</p>
          <h3 class="mb-4">Принимаемые припараты:</h3>
          <p>{{userdata.Medicines}}</p>
          <h3 class="mb-4">Страховка:</h3>
          <p>{{userdata.STRAH}}</p>
          <h3 class="mb-4">Контакт для  экстренной связи:</h3>
          <p>{{userdata.UrgentContacts}}</p>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="pa-6">
          <h3 class="mb-4">Дата рождения: </h3>
          <p>{{userdata.BD}}</p>
          <h3 class="mb-4">Пол:</h3>
          <p>{{userdata.Gender}}</p>
          <h3 class="mb-4">Пол:</h3>
          <p>{{userdata.Passport}}</p>
          <h3 class="mb-4">Пол:</h3>
          <p>{{userdata.SN}}</p>
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
      userdata: {}
    }
  },
  created: function () {
    HTTP.get('usersdata/' + this.id)
    .then(response => {
      this.userdata = response.data
      console.log(response.data)
    })
  }
}
</script>
