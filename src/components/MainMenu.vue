<template>
  <v-navigation-drawer clipped fixed :value="drawer" @input="setDrawer" app>
    <v-list dense>
      <menu-item title="Categories" icon="toc" to="/tracks"></menu-item>
      <menu-item title="Locations" icon="weekend" to="/rooms"></menu-item>
      <menu-item title="Agenda" icon="home" to="/all"></menu-item>
      <menu-item title="Favourite Events" icon="favorite" to="/favourites"></menu-item>
      <v-divider></v-divider>
      <menu-item title="Venue Map" icon="map" to="/map"></menu-item>
      <menu-item title="Settings" icon="settings" to="/settings"></menu-item>
      <v-divider></v-divider>
      <menu-item title="About" icon="info" to="/about"></menu-item>
      <menu-item title="Sponsors" icon="star" to="/sponsors"></menu-item>
      <menu-item title="Help" icon="face" to="/help"></menu-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import MenuItem from './MenuItem'

export default {
  name: 'main-menu',

  components: {
    'menu-item': MenuItem
  },

  computed: mapGetters([
    'drawer'
  ]),

  methods: mapActions([
    'setDrawer'
  ])
}
</script>

<style>
.application.theme--light a {
color: #f03e3e;
}

.list__tile--active .list__tile__action:first-of-type .icon {
color: #f03e3e;
}
.navigation-drawer > .list .list__tile--active .list__tile__title {
color: #f03e3e;
}
</style>
