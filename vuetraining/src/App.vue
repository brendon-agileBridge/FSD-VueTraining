<template>
  Site Running
  <nav>
    <router-link class="navLink" active-class="active" to="/">Home</router-link> |
    <router-link class="navLink" active-class="active" to="/Totals">Totals</router-link>
  </nav>
  
  
  <br>
  <router-view/>
  
</template>

<script setup>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding:1rem;
  
  .navLink{
    text-decoration: none;
    color: black;
    padding: 0.3rem;
  }
  
  .active {
    background-color: #2c3e50;
    color: white;
    border-radius: 25px;
  }
}
</style>
