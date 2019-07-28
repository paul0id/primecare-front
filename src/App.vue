<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>PRIME-CARE</span>
        <span class="font-weight-light"> – Панель управления</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            text
            v-for="link in links"
            :key="link.title"
            :to="link.url"
          >
            <span>{{link.title}}</span>
          </v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({

    links: [
      {title: 'Запросы 112', icon: 'playlist_add', url: '/'},
      {title: 'Свободные обращения', icon: 'playlist_add', url: '/servicerequests'},
      {title: 'Пользователи', icon: 'reorder', url: '/users'},
      {title: 'Волонтеры', icon: 'reorder', url: '/volunteers'},
      {title: 'Партнеры', icon: 'playlist_play', url: '/partners'}
    ]

  }),
};
</script>
