<template lang="pug">
div
  img(src="@/assets/Daepa.png")
  h2(style='font-weight:normal') This is
  h2(style="font-weight:bold") Daepa Room Bangmyoengrok

  br

  form(@submit.prevent='()=>{getEvent();return false;}')
    sui-input(placeholder='Secret Code' :value='secretCode' @input='e=>secretCode = e.target.value')

    p(style='margin:0;color:red;font-weight:bold;padding:8px;') {{ invalid }}&nbsp;
    sui-input(type='submit') Enter

  br
  br

  br
  br

</template>
<script setup>
import { skapi } from '@/main';
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
let secretCode = ref('');
let router = useRouter();
let events = inject('events');
let refId = inject('refId');
let invalid = ref('');

async function getEvent() {
  let secret = secretCode.value;
  let res = await skapi.getRecords({
    access_group: 0,
    table: 'event',
    index: {
      name: 'code',
      value: secret
    },
  }, {
    ascending: false,
    refresh: true
  });

  if (res?.list.length) {
    refId.value = res.list[0].record_id;
    events.value = res.list;

    let r = await skapi.getRecords({
      access_group: 0,
      table: 'event'
    }, {
      ascending: false,
      refresh: true
    });

    for (let e of r.list) {
      if (e.index.value !== secret) {
        events.value.push(e);
      }
    }

    router.push({ name: 'bang' });
  }

  else {
    invalid.value = '!! Invalid code !!';
  }
}

</script>

<style scoped lang="less">
div {
  text-align: center;
  color: black;

  img {
    width: 100%;
    display: block;
  }

  sui-input:not([type='submit']) {
    font-size: 20px;
    background-color: white;
    max-width: 100%;
  }
}
</style>