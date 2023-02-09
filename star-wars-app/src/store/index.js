import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    starshipsList: [],
    starshipDetails: {},
  },
  getters: {
  },
  mutations: {
    loadShipsData(state, shipsData) {
      state.starshipsList = shipsData;
    },
    loadShipDetails(state, shipDetails) {
      state.starshipDetails = shipDetails;
    }
  },
  actions: {
    async fetchStarships({ commit }) {
      const shipsData = await axios
        .get('https://swapi.py4e.com/api/starships/')
        .then(response => response.data.results)
      commit('loadShipsData', shipsData)
    },

    async fetchStarshipDetails({ commit }, url) {
      const shipDetails = await axios
        .get(`${url}`)
        .then(response => response.data)
      commit('loadShipDetails', shipDetails)
    }
  },

})
