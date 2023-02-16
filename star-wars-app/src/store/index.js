import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    starshipsList: [],
    starshipDetails: {},
    starshipsPage: 1,

    showModal: false,
    showLoginModal: false,
    authentic: false
  },
  getters: {
    getNextPage(state) {
      return state.starshipsPage
    }
  },
  mutations: {
    loadShipsData(state, shipsData) {
      state.starshipsList = shipsData;
    },
    loadShipDetails(state, shipDetails) {
      state.starshipDetails = shipDetails;
    },
    loadMoreShips(state) {
      state.starshipsPage++
    },
    handleModal(state) {
      state.showModal = !state.showModal;
    },
    handleLoginModal(state) {
      state.showLoginModal = !state.showLoginModal;
    },
    setAuthentic(state, status) {
      state.authentic = status;
    }
  },
  actions: {
    async fetchStarships({ commit }, starshipsPage) {
      const shipsData = await axios
        .get(`https://swapi.py4e.com/api/starships/?page=${starshipsPage}`)
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
