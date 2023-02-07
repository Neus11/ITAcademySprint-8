<template>
  <div>
    <nav>
      <router-link to="/">HOME</router-link> |
      <router-link to="/about">STARSHIPS</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>

* {
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}

nav {
  padding: 30px;
  background-color: black;
  margin-top: 0;
}

nav a {
  color: whitesmoke;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(165, 157, 136);
}
</style>
