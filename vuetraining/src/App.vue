<template>
  Site Running
  <br>
  <template v-for="i in 10" :key="i">
    <CountComponent :initialCount="i" @updateCount="logChange"/>
  </template>
  
</template>

<script setup>
import CountComponent from "@/components/CountComponent.vue";

function logChange(count) {
  console.log(count);
}

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
