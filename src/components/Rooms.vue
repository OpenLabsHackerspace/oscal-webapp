<template>
  <v-layout justify-center align-top>
    <v-list three-line>
      <template v-for="(room, index) in rooms">
        <room :room="room"></room>
        <v-divider v-if="index + 1 < rooms.length"></v-divider>
      </template>
    </v-list>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'

import Room from './Room'

export default {
  name: 'rooms',

  components: {
    'room': Room
  },

  computed: mapGetters({
    rooms: 'allRoomStats'
  })
}
</script>

<style>
  .layout {
    width: 100%;
  }

  .list {
    width: 100%;
    padding: 0;
  }
</style>


