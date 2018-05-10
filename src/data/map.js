import Building from '../logic/Building'

export default {
  state: {
    buildings: {
      'Talk 1': new Building({name: 'Talk 1'}),
      'Talk 2': new Building({name: 'Talk 2'}),
      'Workshop 1': new Building({name: 'Workshop 1'}),
      'Workshop 2': new Building({name: 'Workshop 2'}),
      'Protik': new Building({name: 'Protik'}),
      'Pyramid': new Building({name: 'Pyramid'}),
    },

    zoomTipShown: false
  },

  getters: {
    buildings: state => state.buildings,

    roomBuilding: state => roomName => Object.values(state.buildings).filter(building => building.containsRoom(roomName))[0],

    zoomTipShown: state => state.zoomTipShown
  },

  mutations: {
    setZoomTipShown (state, zoomTipShown) {
      state.zoomTipShown = zoomTipShown
    }
  },

  actions: {
  showZoomTip ({commit, state, dispatch}) {
    if (!state.zoomTipShown) {
      dispatch('showNotification', {
        message: 'Click on a building to zoom in',
        color: 'info',
        timeout: 5000
      })
      commit('setZoomTipShown', true)
    }
  }
}


}
