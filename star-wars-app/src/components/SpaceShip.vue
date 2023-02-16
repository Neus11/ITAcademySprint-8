<template>
  <div>
    <div v-for="item in starshipsList" 
      :key="item" 
      class="spaceships">
        <router-link :to="{ name: 'details', params: { id: (item.url) } } ">
          {{ item.name.toUpperCase() }} <br />
          {{ item.model }} 
        </router-link>
      </div>
      <div>
        <button class="loadButton" @click="loadMoreShips">MORE SHIPS</button>
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
      page: 1
    }
  },
  methods: {
    loadMoreShips() {
      this.$store.commit('loadMoreShips');
      this.$store.dispatch('fetchStarships', this.$store.getters.getNextPage)
    }
  },
  computed: {
    ...mapState(['starshipsList'])
  },
  created() {
    this.$store.dispatch('fetchStarships', this.page);
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spaceships {
  margin: 5px;
  padding: 1rem;
  background-color: rgb(49, 49, 49);
  color: white;
  font-family: 'Consolas';
}

a {
  text-decoration: none;
  color: white;
  background-color: rgb(49, 49, 49);
}

.loadButton {
  background-color: grey;
  width: 10rem;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: bold;
}

</style>
