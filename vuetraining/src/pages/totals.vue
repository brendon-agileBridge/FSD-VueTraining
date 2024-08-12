<script setup>

import {useTotalsStore} from "@/store/totals";

const store = useTotalsStore();
</script>

<template>
  <h1>Totals Page</h1>
  <br>
  {{store.totalCount}}
</template>

<style scoped>

</style>