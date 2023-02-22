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
  --g1: rgba(255, 255, 255, 1);
  --g2: rgba(0, 177, 0, 1);
  --textColor: 'black';

  width: 100%;
  // min-height: calc(100vh - 2em);
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: linear-gradient(0deg, var(--g1) 16%, var(--g2) 76%);
  color: var(--textColor);

  // &.contrast {
  //   color: white;
  // }
}

sui-input[type='submit'] {
  background-color: rgb(0 177 0);
  color: white;
  font-size: 28px;
  font-weight: bold;
}
</style>