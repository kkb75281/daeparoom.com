<template lang="pug">
#shell
  router-view
</template>
<script setup>
import { ref, provide } from 'vue';

let events = ref([]);
let refId = ref('');
provide('events', events);
provide('refId', refId);
</script>
<style lang="less">
#shell {
  width: 100%;
  // min-height: calc(100vh - 2em);
  height: 100px;
  margin: 0;
  padding: 0;
}

sui-input[type='submit'] {
  background-color: rgb(0 177 0);
  color: white;
  font-size: 28px;
  font-weight: bold;
}
</style>