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

div#lucky(style='padding:20px;')
  .fallicon

  .title
    h1 행운의 주인공은?

  div(style='display: flex; justify-content: center;')
    .randomBang

  br

  div(style='text-align:center;')
    .randomClick(@click="randomShow") 돌려라

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
      console.log(skapi.getRecords)
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

function randomShow() {
  let randomBang = document.querySelector('.randomBang');
  let random = Math.floor(Math.random() * (bang.value.length - 1) + 1);
  let time = 30;
  // let counter = 1234567890;

  // function func(t) {
  //   if(t = 300) {
  //     return;
  //   }

  //   return  
  // }

  let interval = setInterval(() => {
    randomBang.innerHTML = Math.floor(Math.random() * 99);
    time += 3;
    // console.log(time);
  }, time)

  setTimeout(() => {
    clearInterval(interval)
    randomBang.innerText = '';
    randomBang.append(random)
  }, 4000)
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

.randomBang {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #00C80D;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: #00C80D;
  background-color: #fff;
  font-weight: 700;

  &.active {}
}

.fallicon {

  &.active {
    animation: fall linear forwards;
    font-size: 30px;
    position: absolute;
    content: '🫑';
    top: -20px;
    z-index: 9999;

    @keyframes fall {
      to {
        transform: translateY(105vh);
      }
    }
  }
}



.randomClick {
  box-shadow: inset 0 0 2px #333;
  background-color: #00b100;
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding: 0.5em 1.2em;
  margin: 30px 0 60px 0;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    // background-color: transparent;
    // color: rgb(2, 74, 0);
    // transform: translateY(1px);
    opacity: 0.9;
  }
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
