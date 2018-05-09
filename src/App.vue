<template>
  <v-app id="app" light>
    <main-menu></main-menu>
    <main-toolbar></main-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <keep-alive include="all-events,favourite-events,conference-tracks,rooms,sponsors,help">
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-content>
    <notification></notification>
    <analytics></analytics>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

import Analytics from './components/Analytics'
import MainMenu from './components/MainMenu'
import MainToolbar from './components/MainToolbar'
import Notification from './components/Notification'

export default {
  name: 'app',

  components: {
    'analytics': Analytics,
    'main-menu': MainMenu,
    'main-toolbar': MainToolbar,
    'notification': Notification
  },

  methods: mapActions([
    'initFavourites',
    'parseSchedule',
    'initRoomStateUpdater'
  ]),

  created: function () {
    this.parseSchedule()
    this.initFavourites()
    this.initRoomStateUpdater()
  }
}
</script>

<style>
.application .theme--light.toolbar, .theme--light .toolbar {
background-color: #ea272b;
color: white;
}
.application .theme--light.btn, .theme--light .btn {
color: white;
}
</style>
