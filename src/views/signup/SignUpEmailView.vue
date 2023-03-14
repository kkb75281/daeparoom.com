<template lang="pug">
#wrap
    div
        h1
            | 이메일 인증을
            br
            | 진행해 주세요.
        h4 
            | 이메일 인증을 위한 메일이 발송되었습니다.
            br
            | 회원가입 완료를 위한 이메일 인증을 진행해 주세요.
        p.email 가입 이메일 주소 : 
            span {{ route.params.email }}  
        h4.em 이메일을 받지 못하셨나요?
        button(@click="showMs") 이메일 다시 보내기
        br
        span.send 이메일이 재전송 되었어요!
</template>
<script setup>
import { skapi } from '@/main.js';
import { useRoute } from 'vue-router'

let route = useRoute();

function showMs() {
    let redirectUrl = "/signup3"
    let send = document.querySelector('.send');

    skapi.resendSignupConfirmation(redirectUrl);
    send.classList.add('active');
}
</script>
<style scoped lang="less">
#wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > div {
        width: 350px;
    }
}

h1 {
    width: 100%;
    line-height: 52px;
    margin-bottom: 36px;
    font-weight: 700;
    font-size: 36px;
}

h4 {
    width: 100%;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 36px;

    &.em {
        margin-bottom: 20px;
    }
}

p {
    font-weight: 500;
    line-height: 23px;
    color: #fff;
    margin-bottom: 36px;
}

button {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #fff;
    background-color:transparent;
    font-weight: 700;
    font-size: 16px;
    padding: 10px 100px;
    color: #fff;
    margin-bottom: 36px;
    cursor: pointer;
}

.send {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #00C80D;
    padding: 3px 8px;
    border-radius: 4px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.25));
    display: none;

    &.active {
        display: inline-block;
    }
}
</style>