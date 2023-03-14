<template lang="pug">
#wrap 
    form(action = 'login')
        h1 축하드립니다!
        h2 
            | 당신은 __번째
            br
            | 컬티베이터 입니다.
        h4 
            | 이메일 인증이 완료되었습니다.
            br
            | 대파룸에 로그인해 주세요.
        div(style="text-align:center;")
            sui-input(type='submit' value='로그인')
</template>
<script setup>

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

h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 44px;
}

h4 {
    width: 100%;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 36px;
}

sui-input {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    background-color: #00C80D;
}
</style>