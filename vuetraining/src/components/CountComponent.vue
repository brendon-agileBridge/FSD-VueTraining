<script setup>
import {ref, watch} from "vue";

let props = defineProps({
  initialCount: Number
});

let emits = defineEmits({
  "updateCount": null
});

let count = ref(props.initialCount);

watch(count, (newVal, oldVal) => {
  emits('updateCount',newVal);
});

function resetCount() {
  count.value = 0;
}

computed

</script>

<template>
  <br><br><br>
  Count is: {{ count }}
  <br>
  <label for="">Two way bound value</label>
  <br>
  <input type="number" v-model="count">
  <br>
  <button @click="() => resetCount()">Reset</button>
</template>

<style scoped>

</style>