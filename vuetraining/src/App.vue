<template>
  Site Running
  <br>
  <template v-for="i in 10" :key="i">
    <CountComponent/>
  </template>
  
</template>

<script setup>
import CountComponent from "@/components/CountComponent.vue";

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
