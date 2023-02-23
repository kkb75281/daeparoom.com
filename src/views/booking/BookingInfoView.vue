<template lang="pug">
.wrap
    a.exit(href="/")
        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
            g
                g
                    g
                        polygon(points="20,5.78 18.22,4 12,10.22 5.78,4 4,5.78 10.22,12 4,18.22 5.78,20 12,13.78 18.22,20 20,18.22 13.78,12 			")
    .info_wrap 
        h2 Event Info

        h4 Event Name
        form.form(@submit.prevent='()=>{getEvent();return false;}')
            sui-input(placeholder='Enter Event Name')
        
        h4 Event Starts
        .selectTime 
            span 2023. 10. 08 / 21:00 PM 
            a.goCalendar(href="/bookingCalendar")
                svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                    g
                        g
                            path(d="M4.87,22c-0.51,0-0.96-0.19-1.34-0.57c-0.38-0.38-0.57-0.82-0.57-1.34V5.38c0-0.53,0.19-0.99,0.57-1.36c0.38-0.38,0.82-0.57,1.34-0.57h1.45V2h1.81v1.45h7.72V2h1.81v1.45h1.45c0.53,0,0.99,0.19,1.36,0.57c0.38,0.38,0.57,0.83,0.57,1.36v14.72c0,0.51-0.19,0.96-0.57,1.34C20.09,21.81,19.64,22,19.1,22H4.87z M4.87,20.09H19.1V9.84H4.87V20.09z")
        
        h4 Event Ends
        .selectTime 
            span 2023. 10. 09 / 21:00 PM 
            a.goCalendar(href="/bookingCalendar")
                svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                    g
                        g
                            path(d="M4.87,22c-0.51,0-0.96-0.19-1.34-0.57c-0.38-0.38-0.57-0.82-0.57-1.34V5.38c0-0.53,0.19-0.99,0.57-1.36c0.38-0.38,0.82-0.57,1.34-0.57h1.45V2h1.81v1.45h7.72V2h1.81v1.45h1.45c0.53,0,0.99,0.19,1.36,0.57c0.38,0.38,0.57,0.83,0.57,1.36v14.72c0,0.51-0.19,0.96-0.57,1.34C20.09,21.81,19.64,22,19.1,22H4.87z M4.87,20.09H19.1V9.84H4.87V20.09z")
    
    .venue_wrap
        h2 Venue

        //- form.venueType
        //-     label Public
        //-         input(type='radio' id='Public' name='Public') 
        //-     label Private
        //-         input(type='radio' id='Private' name='Private') 

        //- div
        //-     label(v-for="option in options" :key="option.value")
        //-         input(type="radio" v-model="selectedOption" :value="option.value") {{ option.label }}

        label Public
        input(type="radio" name="chk_info" value="Public" checked="checked")
        label Private
        input(type="radio" name="chk_info" value="Private")

        h4 Off/Online
        select.select
            option(value="Offline") Offline
            option(value="Online") Online

        h4 Location

</template>

<script setup>
import { onMounted, ref } from 'vue';

// let selectedOption = '';
// let options = [
//     { label: 'Offline', value: 'Offline' },
//     { label: 'Online', value: 'Online' },
// ]

onMounted(() => {
    

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
        float: right;
        width: 20px;
        height: 20px;
    }

    .info_wrap {
        h2 {
            position: relative;
            padding-top: 40px;
            padding-bottom: 12px;
            margin-bottom: 28px;
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
            margin-bottom: 8px;
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
    }

    .venue_wrap {
        h2 {
            position: relative;
            padding-top: 40px;
            padding-bottom: 12px;
            margin-bottom: 28px;
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
            margin-bottom: 8px;
        }

        .select {
            width: 100%;
            height: 40px;
            font-size: 20px;
            font-weight: 400;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            padding: 8px 8px 8px 12px;
            background: #FFFFFF;
            border: 1px solid #8C8C8C;
            box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
            border-radius: 4px;
        }

        .venueType {
            display: flex;
            flex-wrap: nowrap;
        }
    }
}
</style>