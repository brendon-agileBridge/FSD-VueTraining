<template>
  Site Running
  <br>
  Count is: {{ count }}
  <br>
  Alternatively Count is: <span v-text="count"></span>
</template>

<script setup>
let count = 0;


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
</style>
