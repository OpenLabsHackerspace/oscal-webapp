<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>OSCAL 2018</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'main-toolbar',
  methods: mapActions([
    'toggleDrawer'
  ])
}
</script>

<style>
.application .theme--light.toolbar, .theme--light .toolbar {
background-color: #ea272b !important;
color: white;
}
.application .theme--light.btn, .theme--light .btn {
color: white !important;
}
</style>
