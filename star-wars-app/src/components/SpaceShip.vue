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
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['starshipsList'])
  },
  created() {
    this.$store.dispatch('fetchStarships');
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
}

a {
  text-decoration: none;
  color: white;
  background-color: rgb(49, 49, 49);
}

</style>
