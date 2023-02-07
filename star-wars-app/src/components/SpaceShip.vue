<template>
  <div>
    <div v-for="item in starshipList.results" :key="item" class="spaceships">
      {{ item.name }} <br />
      {{ item.model }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'SpaceShips',
  data() {
    return {
      starshipList: [],
    }
  },
  mounted () {
      fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => {
          this.starshipList = data;
        } )
    },
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

</style>
