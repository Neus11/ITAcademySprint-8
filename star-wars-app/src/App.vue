<template>
  <div class="nav-top">
    <TopNavBar />
  </div>
</template>

<script>

import TopNavBar from '@/components/TopNavBar.vue';

export default {
  components: {
    TopNavBar
  }
}
</script>

<style>

* {
  background-color: black;
}
#app {
  font-family: 'Consolas';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}

.nav-top {
  display: flex;
  flex-direction: column-reverse;
}

nav {
  padding: 30px;
  background-color: black;
  margin-top: 0;
}

nav a {
  color: whitesmoke;
  text-decoration: none;
  align-items: center;
}

nav a.router-link-exact-active {
  color: rgb(65, 65, 65);
}

</style>
