<template lang="pug">
#wrap
    div
        #title 
            img(src="@/assets/image/folder_open.svg")
            h2 Cultivation

        form.form
            label 이메일
            br
            sui-input#email(placeholder='이메일 계정' name='email')

            br

            label 비밀번호
            br
            sui-input#password(placeholder='비밀번호' name='password')

            a(href="/login") 이메일 / 비밀번호 찾기

            br
            br

            div(style="text-align:center;")
                sui-input(type='submit' value='로그인')

        #bottom 
            p 아직 계정이 없으신가요? 
                a(href="/signup1") 계정 만들기
            img(src="@/assets/image/daepa_logo.svg")
</template>

<script setup>

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
}
#bottom {
    text-align: center;
    margin-top: 50px;
    
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