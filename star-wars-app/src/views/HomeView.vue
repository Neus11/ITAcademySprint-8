<template>
  <div class="home">
    <hr>
    <img alt="StarWars logo" src="../assets/STAR-WARS-9.jpg">
    <hr>
    <SpaceShip />
  </div>
</template>

<script>
// @ is an alias to /src
import SpaceShip from '@/components/SpaceShip'

export default {
  name: 'HomeView',
  components: {
    SpaceShip
  }
}
</script>

<style scoped>
hr {
  color:white;
}

div {
  background-color: black;
}

img {
  width: 30%;
}
</style>
