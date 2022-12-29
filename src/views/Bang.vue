<template lang="pug">
div(style='padding:20px;')
  .title
    h1 씨앗을 뿌려라
  form.form(ref='form' onsubmit='return false;' @submit.prevent='e=>{upload(e.target);}')
    label 이름
    br
    sui-input#name(placeholder='Name' name='name')

    br
    br

    label 인스타
    br
    sui-input#insta(placeholder='@your_instagram' name='insta')

    br
    br

    label 특기 및 장점
    br
    sui-input#job(placeholder='Job' name='job')

    br
    br

    label 한마디 두마디
    br
    textarea#say(placeholder='Say something' name='say' style="box-sizing: border-box;width:100%;height:12em;font-size:inherit;padding:0.66em;")

    br
    br

    div(style="text-align:center;")
      sui-input(type='submit' value='뿌리기')

  br

hr

div#seed(style='padding:20px;')
  .title
    h1 씨앗을 누가 뿌렸냐

  br

  sui-select.eventTitle(v-if='events.length' @change='e=>eventIdx=e.target.value')
    option(v-for='(e, idx) in events' :value="idx" :selected='eventIdx === idx') {{ e.data.date }}/{{ e.data.time }} {{ e.data.name }}

  br

  .eventBang(v-for="(b, idx) in bang")

    span {{ bang.length - idx }}. {{ b.name ? b.name + ' /' : '' }} {{ b.insta ? b.insta + ' /' : '' }} {{ b.job ? b.job + ' /' : '' }}
    br
    span {{ b.say }}

</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject, ref } from 'vue';
import { skapi } from '@/main';

let router = useRouter();

let events = inject('events');
let eventIdx = ref(0);

if (!events || !events.value.length) {
  router.push('/');
}

let refId = inject('refId');
let bang = ref([]);
let form = ref(null);

async function logAnonymous() {
  await skapi.login({
    email: 'anonymous@anonymous.com',
    password: 'anonymous'
  });
}

if (events.value?.[eventIdx.value]?.record_id) {
  skapi.getRecords(
    {
      table: 'guest',
      reference: events.value[eventIdx.value].record_id,
      access_group: 0
    },
    {
      ascending: false,
      refresh: true
    })
    .then(res => {
      for (let r of res.list) {
        bang.value.push(r.data);
      }
    });
}

let iveTried = false;
async function upload(f) {
  if (!skapi.user) {
    await logAnonymous();
  }

  try {
    let post = await skapi.postRecord(f, {
      access_group: 0,
      table: 'guest',
      reference: refId.value
    });
    bang.value.unshift(post.data);
    form.value.reset();
    window.seed.scrollIntoView();
  }
  catch (err) {
    console.error(err);
    if (!iveTried) {
      iveTried = true;
      // fails for some reason... (maybe jwt duplication)
      await upload(f);
    }
    else {
      window.alert('문제가 생겼습니다. 박사한테 물어보세요.');
    }
  }
}
</script>

<style lang="less">
.title {
  padding: 60px 0 20px 0;
  text-align: center;

  h1 {
    font-weight: bold;
  }
}

.eventTitle {
  font-weight: bold;
  background-color: white;
  padding: 8px 12px;
  border: 2px solid black;
  border-radius: none;
  width: 100%;
}

.eventBang {
  font-weight: bold;
  box-sizing: content-box;
  padding: 2em 12px;

  &>span {
    display: inline-block;
  }

  &>span:first-child {
    margin-right: 2em;
    font-weight: bold;
  }

  &>span:last-child {
    max-width: 100%;
    word-break: break-word;
  }
}

hr {
  border: none;
  border-top: 1px solid black;
}

.form {
  width: 100%;

  label {
    font-weight: bold;
    margin-bottom: 4px;
    display: inline-block;
  }

  sui-input:not([type='submit']) {
    width: 100%;
    font-size: 20px;
    background-color: white;
  }
}
</style>
