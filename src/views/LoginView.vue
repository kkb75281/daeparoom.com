<template lang="pug">
#wrap
    div
        #title 
            img(src='@/assets/image/folder_open.svg')
            h2 Cultivation

        form.form(@submit = '(e)=>skapi.login(e, { onerror:handleError })' action='cultivation')
            label 이메일 또는 이름
            br
            sui-input#email(name='email' type="email" placeholder='이메일 또는 이름')

            br

            label 비밀번호
            br
            sui-input#password(name='password' type="password" placeholder='비밀번호')

            a(href="/login") 로그인 정보를 잊으셨나요?

            br
            br

            div(style="text-align:center;")
                sui-input(type='submit' value='로그인')

            .warning(:class='{active: invalidLogin}')
                img(src="@/assets/image/warning.svg")
                p 로그인 정보를 확인하세요.

        #bottom 
            p 계정이 없으신가요? 
                a(href="/signup1") 계정 만들기
            img(src="@/assets/image/daepa_logo.svg")
</template>

<script setup>
import { skapi } from '@/main.js';
import { ref } from 'vue';

let invalidLogin = ref(false);

function handleError(err){
    console.log({error: err})

    if(err.code === "INCORRECT_USERNAME_OR_PASSWORD") {
        invalidLogin.value = true;
    }
}
</script>

<style scoped lang="less">
#wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    & > div {
        width: 320px;
    }
}
#title {
    width: 100%;
    line-height: 0.1;

    img {
        width: 60px;
        height: 60px;
    }

    h2 {
        font-size: 36px;
        font-weight: 700;
    }
}
.form {
    width: 100%;

    label {
        font-size: 0;
        // font-weight: bold;
        // margin-bottom: 4px;
        // display: inline-block;
    }

    a {
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        float: right;
        margin: 8px 0 20px 0;
    }

    sui-input {
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        background-color: #00C80D;
    }

    sui-input:not([type='submit']) {
        width: 100%;
        font-size: 16px;
        background-color: white;
    }

    .warning {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        display: none;
        margin-top: 12px;

        &.active {
            display: flex;
        }

        img {
            width: 20px;
            height: 20px;
            fill: red;
        }

        p {
            margin: 0;
            color: red;
            font-weight: 400;
            font-size: 14px;
            padding-left: 8px;
        }
    }
}
#bottom {
    text-align: center;
    margin-top: 20px;
    
    p {
        font-size: 14px;
        font-weight: 400;

        a {
            font-weight: 700;
            color: #000;
            text-decoration: none;
        }
    }

    img {
        width: 90px;
        margin-top: 30px;
    }
}
</style>