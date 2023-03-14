<template lang="pug">
.wrap
    .exit(href="/")
        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
            g
                g
                    g
                        polygon(points="20,5.78 18.22,4 12,10.22 5.78,4 4,5.78 10.22,12 4,18.22 5.78,20 12,13.78 18.22,20 20,18.22 13.78,12 			")
    .info_wrap 
        h2 Event Info

        .event
            h4 Event Name
            form.form(@submit.prevent='()=>{getEvent();return false;}')
                sui-input(placeholder='Enter Event Name' :value='secretCode' @input='e=>secretCode = e.target.value')

                .warning 
                    img(src="@/assets/image/warning.svg")
                    p {{ invalid }}
        
        .event
            h4 Event Starts
            .selectTime 
                span 2023. 10. 08 / 21:00 PM 
                a.goCalendar(href="/bookingCalendar")
                    svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                        g
                            g
                                path(d="M4.87,22c-0.51,0-0.96-0.19-1.34-0.57c-0.38-0.38-0.57-0.82-0.57-1.34V5.38c0-0.53,0.19-0.99,0.57-1.36c0.38-0.38,0.82-0.57,1.34-0.57h1.45V2h1.81v1.45h7.72V2h1.81v1.45h1.45c0.53,0,0.99,0.19,1.36,0.57c0.38,0.38,0.57,0.83,0.57,1.36v14.72c0,0.51-0.19,0.96-0.57,1.34C20.09,21.81,19.64,22,19.1,22H4.87z M4.87,20.09H19.1V9.84H4.87V20.09z")
        
        .event.ends
            h4 Event Ends
            .selectTime 
                span 2023. 10. 09 / 21:00 PM 
                a.goCalendar(href="/bookingCalendar")
                    svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                        g
                            g
                                path(d="M4.87,22c-0.51,0-0.96-0.19-1.34-0.57c-0.38-0.38-0.57-0.82-0.57-1.34V5.38c0-0.53,0.19-0.99,0.57-1.36c0.38-0.38,0.82-0.57,1.34-0.57h1.45V2h1.81v1.45h7.72V2h1.81v1.45h1.45c0.53,0,0.99,0.19,1.36,0.57c0.38,0.38,0.57,0.83,0.57,1.36v14.72c0,0.51-0.19,0.96-0.57,1.34C20.09,21.81,19.64,22,19.1,22H4.87z M4.87,20.09H19.1V9.84H4.87V20.09z")
        .errMsg.hide 
            svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                g
                    g
                        path(d="M11.99,17.17c0.32,0,0.58-0.1,0.78-0.3c0.2-0.2,0.3-0.46,0.3-0.78c0-0.31-0.1-0.57-0.3-0.78c-0.2-0.22-0.46-0.33-0.78-0.33c-0.32,0-0.58,0.11-0.78,0.33c-0.2,0.22-0.3,0.48-0.3,0.78c0,0.32,0.1,0.58,0.3,0.78S11.67,17.17,11.99,17.17z M11.1,13.17h1.93V6.83H11.1V13.17z M11.99,22c-1.38,0-2.68-0.26-3.88-0.78s-2.26-1.24-3.17-2.15c-0.91-0.91-1.62-1.97-2.15-3.17S2,13.4,2,12.01c0-1.4,0.26-2.7,0.78-3.91s1.23-2.26,2.14-3.16S6.88,3.33,8.09,2.8S10.6,2,11.99,2c1.4,0,2.71,0.27,3.92,0.8c1.21,0.53,2.27,1.24,3.16,2.14s1.6,1.95,2.14,3.16s0.8,2.52,0.8,3.92c0,1.38-0.27,2.68-0.8,3.9s-1.25,2.27-2.15,3.17c-0.9,0.9-1.95,1.61-3.16,2.14S13.39,22,11.99,22z" style="fill: red;")
            span Event ends should be after Event starts

    .venue_wrap
        h2 Venue

        .venue
            //- div
            //-     label(v-for="option in options" :key="option.value")
            //-         input(type="radio" v-model="selectedOption" :value="option.value") {{ option.label }}
            form
                label(for="Public") Public
                input(type="radio" id="Public" name="chk_info" value="Public" checked="checked")
                label(for="Private") Private
                input(type="radio" id="Private" name="chk_info" value="Private")

        .onoff
            h4 Off/Online
            .selectbox
                button.selectBtn(type="button" class="toggle-btn") 
                    span Offline
                    .optionDown
                        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                            g
                                g
                                    g
                                        polygon(points="12,16 18,8 6,8 			")
                ul.options.hide
                    li
                        button.optionBtn(type="button") Offline
                    li
                        button.optionBtn(type="button") Online

        .location.hide
            h4 Location
            .mapbox
                KakaoMap

        .method.hide
            h4 Method
            .selectbox
                button.selectBtn(type="button" class="toggle-btn") 
                    span URL
                    .optionDown
                        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                            g
                                g
                                    g
                                        polygon(points="12,16 18,8 6,8 			")
                ul.options.hide
                    li
                        button.optionBtn(type="button") URL
                    li
                        button.optionBtn(type="button") Receive link via email
                    li
                        button.optionBtn(type="button") Video chat
                    li
                        button.optionBtn(type="button") Voice chat

    .next 
        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
            g
                g
                    path(d="M12,4l8,8l-8,8l-1.37-1.35l5.64-5.67H4v-1.96h12.27l-5.64-5.64L12,4z")

</template>

<script setup>
import { skapi } from '@/main';
import { onMounted, ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import KakaoMap from '@/components/KakaoMap.vue';

let secretCode = ref('');
let router = useRouter();
let events = inject('events');
let refId = inject('refId');
let invalid = ref('');

async function getEvent() {
    let secret = secretCode.value;
    let warning = document.querySelector('.warning');
    let next = document.querySelector('.next');
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
        invalid.value = 'Enter the event name';
        next.classList.add('disable');
    }
}

onMounted(() => {
    let onOff = document.querySelector('.onoff');
    let onOffSelect = onOff.querySelector('.selectBtn span');
    let onOffSelectOption = onOff.querySelector('.optionDown');
    let onOffOptionsBox = onOff.querySelector('.options');
    let onOffOptionBtn = onOff.querySelectorAll('.optionBtn');

    onOffSelectOption.addEventListener('click', () => {
        onOffOptionsBox.classList.toggle('hide');
    });

    onOffOptionBtn.forEach((option) => {
        option.addEventListener('click', () => {
            onOffSelect.innerHTML = option.innerText;
            onOffOptionsBox.classList.add('hide');
            if(nextBtn.classList.contains('hide')) {
                nextBtn.classList.remove('hide');
            }
        });
    });

    let method = document.querySelector('.method');
    let methodSelect = method.querySelector('.selectBtn span');
    let methodSelectOption = method.querySelector('.optionDown');
    let methodOptionsBox = method.querySelector('.options');
    let methodOptionBtn = method.querySelectorAll('.optionBtn');

    methodSelectOption.addEventListener('click', () => {
        methodOptionsBox.classList.toggle('hide');
    });

    methodOptionBtn.forEach((moption) => {
        moption.addEventListener('click', () => {
            methodSelect.innerHTML = moption.innerText;
            methodOptionsBox.classList.add('hide');
        });
    });

    let nextBtn = document.querySelector('.next');
    let location = document.querySelector('.location');

    nextBtn.addEventListener('click', () => {
        if((onOffSelect.innerText == 'Offline') || (!method.classList.contains('hide'))) {
            location.classList.remove('hide');
            method.classList.add('hide');
            nextBtn.classList.add('hide');
        } else if((onOffSelect.innerText == 'Online') || (!location.classList.contains('hide'))) {
            method.classList.remove('hide');
            location.classList.add('hide');
            nextBtn.classList.add('hide');
        }
    });




});
</script>

<style lang="less">
body {
    overflow: hidden;
}
.wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 20px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;

    .exit {
        text-align: right;
        svg {
            width: 20px;
            height: 20px;
        }
    }

    .info_wrap {
        padding-top: 40px;

        h2 {
            position: relative;
            padding-bottom: 12px;
            margin: 0;
            font-size: 36px;
            font-weight: 700;

            &::before {
                position: absolute;
                content: '';
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                width: 120%;
                height: 1px;
                background-color: #000;
            }
        }
        h4 {
            font-size: 16px;
            font-weight: 700;
            margin: 0 0 8px 0;
        }
        .event {
            padding: 28px 0 16px 0;

            &.ends {
                padding-bottom: 0;
            }
            .form {
                sui-input:not([type='submit']) {
                    width: 100%;
                    font-size: 16px;
                    background-color: white;
                }
            }
            .selectTime {
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                font-size: 20px;
                font-weight: 700;
    
                .goCalendar {
                    width: 24px;
                    height: 24px;
                }
            }
            .warning {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
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
        }
        .errMsg {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            color: rgba(240, 78, 78, 1);
            font-size: 14px;
            font-weight: 400;

            &.hide {
                display: none;
            }
            svg {
                width: 20px;
                height: 20px;
                margin-right: 4px;
            }
        }
    }

    .venue_wrap {
        padding: 40px 0;

        > div {
            padding-top: 28px;
        }
        h2 {
            position: relative;
            padding-bottom: 12px;
            margin: 0;
            font-size: 36px;
            font-weight: 700;

            &::before {
                position: absolute;
                content: '';
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                width: 120%;
                height: 1px;
                background-color: #000;
            }
        }
        h4 {
            font-size: 16px;
            font-weight: 700;
            margin: 0 0 8px 0;
        }
        .venue {
            form {
                font-size: 20px;
                font-weight: 700;

                [type="radio"] {
                    appearance: none;
                    border: max(2px, 0.1em) solid #000;
                    border-radius: 50%;
                    width: 1.25em;
                    height: 1.25em;
                    margin-right: 20px;
                    position: relative;

                    &::before {
                        position: absolute;
                        content: '';
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 50%;
                        background-color: #000;
                        display: none;
                    }

                    &:checked::before {
                        display: block;
                    }
                }
            }
        }
        .onoff {
            .selectbox {
                .selectBtn {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    text-align: left;
                    background: #FFFFFF;
                    border: 1px solid #8C8C8C;
                    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
                    border-radius: 4px;
                    padding-left: 12px;
                    font-size: 20px;
                    font-weight: 400;

                    .optionDown {
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        right: 8px;
                        bottom: 6px;
                    }
                }
                .options {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    list-style: none;
                    background: #FAFAFA;
                    border: 1px solid #8C8C8C;
                    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25), inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
                    border-radius: 4px;
                    padding: 8px;
                    margin-top: 8px;
                    box-sizing: border-box;

                    &.hide {
                        display: none;
                    }

                    li {
                        margin-bottom: 8px;

                        &:last-child {
                            margin-bottom: 0;
                        }
                        .optionBtn {
                            width: 100%;
                            border: 0;
                            font-size: 20px;
                            font-weight: 400;
                            padding: 6px;
                            text-align: left;
                            background-color: transparent;
                            border-radius: 4px;
                            transition: all 0.3s;

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.04);
                            }
                        }
                    }
                }
            }
        }
        .location {
            &.hide {
                display: none;
            }
            .mapbox {
                width: 100%;
                height: 230px;
            }
        }
        .method {
            &.hide {
                display: none;
            }
            .selectbox {
                .selectBtn {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    text-align: left;
                    background: #FFFFFF;
                    border: 1px solid #8C8C8C;
                    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
                    border-radius: 4px;
                    padding-left: 12px;
                    font-size: 20px;
                    font-weight: 400;

                    .optionDown {
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        right: 8px;
                        bottom: 6px;
                    }
                }
                .options {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    list-style: none;
                    background: #FAFAFA;
                    border: 1px solid #8C8C8C;
                    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25), inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
                    border-radius: 4px;
                    padding: 8px;
                    margin-top: 8px;
                    box-sizing: border-box;

                    &.hide {
                        display: none;
                    }

                    li {
                        margin-bottom: 8px;

                        &:last-child {
                            margin-bottom: 0;
                        }
                        .optionBtn {
                            width: 100%;
                            border: 0;
                            font-size: 20px;
                            font-weight: 400;
                            padding: 6px;
                            text-align: left;
                            background-color: transparent;
                            border-radius: 4px;
                            transition: all 0.3s;

                            &:hover {
                                background-color: rgba(0, 0, 0, 0.04);
                            }
                        }
                    }
                }
            }
        }
    }
    .next {
        text-align: right;

        &.hide {
            display: none;
            pointer-events: none;
        }
        &.disable {
            opacity: 0.25;
        }
        svg {
            width: 50px;
            height: 50px;
        }
    }
}
</style>