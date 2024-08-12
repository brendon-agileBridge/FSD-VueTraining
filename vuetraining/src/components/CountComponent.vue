<script setup>
import {computed, ref, watch} from "vue";
import {useTotalsStore} from "@/store/totals";
import router from "@/router";

const store = useTotalsStore();

let props = defineProps({
  initialCount: Number
});

let emits = defineEmits({
  "updateCount": null
});

let count = ref(props.initialCount);

watch(count, (newVal, oldVal) => {
  if(oldVal === newVal)
    return;
  
  emits('updateCount',newVal);
  router.push('/Totals');

  store.incrementBy(newVal - oldVal);
  
});

function resetCount() {
  count.value = 0;
}

const letter = computed(() => {
  let ordA = 'a'.charCodeAt(0);
  let ordZ = 'z'.charCodeAt(0);
  let len = ordZ - ordA + 1;

  let s = "";
  let n = count.value;
  while(n >= 0) {
    s = String.fromCharCode(n % len + ordA) + s;
    n = Math.floor(n / len) - 1;
  }
  return s;
});

</script>

<template>
  <br><br><br>
  Count is: {{ count }}
  <br>
  Letter is: {{ letter }}
  <br>
  <label for="">Two way bound value</label>
  <br>
  <input type="number" v-model="count">
  <br>
  <button @click="() => resetCount()">Reset</button>
</template>

<style scoped>

</style>