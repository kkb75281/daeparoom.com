<template lang="pug">
#wrap
    div
        #title 
            img(src="@/assets/image/pencil.svg")
            h2 Community

        form.form(@submit.prevent='()=>{getEvent();return false;}')
            sui-input(placeholder='시크릿 코드' :value='secretCode' @input='e=>secretCode = e.target.value')
            
            br
            br
            
            sui-input(type='submit' value='입장')

            .warning 
                img(src="@/assets/image/warning.svg")
                p {{ invalid }}

        #bottom 
            p 코드가 없으신가요? 
                a(href="/login") 호스트 찔러보기
            img(src="@/assets/image/daepa_logo.svg")
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
    let warning = document.querySelector('.warning');
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
        warning.classList.add('active');
        invalid.value = '코드를 다시 한 번 확인해 주세요.';
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
    padding: 60px 0;

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
            padding: 8px;
        }
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