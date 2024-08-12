<script setup>

import {ref} from "vue";

let count = ref(0);

</script>

<template>
  Count is: {{ count }}
  <br>
  Alternatively Count is: <span v-text="count"></span>
  <br><br><br>
  <label for="">Two way bound value</label>
  <br>
  <input type="number" v-model="count">
  <br>
  <button @click="count = 0">Reset</button>
</template>

<style scoped>

</style>