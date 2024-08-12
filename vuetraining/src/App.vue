<template>
  Site Running
  <br>
  Count is: {{ count }}
  <br>
  Alternatively Count is: <span v-text="count"></span>
  <br><br><br>
  <label for="">Two way bound value</label>
  <br>
  <input type="number" v-model="count">
</template>

<script setup>
import {ref} from "vue";

let count = ref(0);


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
