<template lang="pug">
#wrap
    div
        #title 
            img(src="@/assets/image/folder_open.svg")
            h2 Sign up

        //- form.form(@submit = '(e)=>skapi.signup(e, { response: r => afterSignup(r), confimation: true, onerror: err => alertErr(err) })')
        form.form(@submit = '(e)=>skapi.signup(e, { response: r => afterSignup(r), onerror: err => alertErr(err) })')
            label User Name
            br
            sui-input#name(type='name' name='name' placeholder='계정 이름')

            label Email
            br
            sui-input#email(type='email' name='email' placeholder='이메일')

            label Password
            br
            sui-input#password(type='password' name='password' placeholder='비밀번호')

            label Password Confirm
            br
            sui-input#confirm_password(type='password' placeholder='비밀번호 확인' @change = 'validatePassword' style='margin-bottom: 10px;')

            div(style="text-align:center; margin: 30px 0;")
                sui-input(type='submit' value='계정 만들기')

        #bottom 
            p 이미 계정이 있으신가요? 
                a(href="/login") 로그인하기
</template>

<script setup>
import { skapi } from '@/main.js';
import { useRouter } from 'vue-router';

let router = useRouter();

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords don't match");
    }
    else {
        confirm_password.setCustomValidity('');
    }
}

function afterSignup(r) {
    // signup 성공여부
    console.log(r);
    
    // vue router로 코드로 유저를 이동
    router.push({ name: 'signup2', params: { email: email.value }, props: true });
}

function alertErr(err) {
    alert(err.message);
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

    &>div {
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
    padding-top: 40px;

    label {
        font-weight: 700;
        margin-bottom: 4px;
        display: inline-block;
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
        margin-bottom: 20px;
    }

    sui-input:not([type='submit']) {
        width: 100%;
        font-size: 16px;
        background-color: white;
    }
}

#bottom {
    text-align: center;

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