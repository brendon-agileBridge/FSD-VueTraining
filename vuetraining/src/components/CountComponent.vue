<script setup>
import {ref} from "vue";

let props = defineProps({
  initialCount: Number
});

let emits = defineEmits({
  "updateCount": null
});

let count = ref(props.initialCount);

</script>

<template>
  Count is: {{ count }}
  <br>
  Alternatively Count is: <span v-text="count"></span>
  <br><br><br>
  <label for="">Two way bound value</label>
  <br>
  <input type="number" v-model="count" @change="$emit('updateCount',count)">
  <br>
  <button @click="count = 0">Reset</button>
</template>

<style scoped>

</style>