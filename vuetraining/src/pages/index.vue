<script setup>
import CountComponent from "@/components/CountComponent.vue";

function logChange(count) {
  console.log(count);
}
</script>

<template>
  <template v-for="i in 10" :key="i">
    <CountComponent :initialCount="i" @updateCount="logChange"/>
  </template>
</template>

<style scoped>

</style>