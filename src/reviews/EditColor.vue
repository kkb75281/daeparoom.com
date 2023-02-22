<template lang="pug">
.ecColor(:class="{ contrast: isContrast }")
    ul
        li Color1
            input.bgColor.bgColor1(ref='bg1' type="color" @input="returnColor" :value='initG1')
        li Color2
            input.bgColor.bgColor2(ref='bg2' type="color" @input="returnColor" :value='initG2')
        li Text
            .txColor(@click="textColorChange" :class="{ contrast: isContrast }")
        input.sInput(type='submit' value='Save')

</template>
<style lang="less">
.ecColor {
    position: absolute;
    content: '';
    left: 0;
    bottom: -250px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25), inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
    z-index: 999;

    &.contrast {
        background-color: #000;
    }

    ul {
        width: 153px;
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        padding: 20px;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 20px;

            .bgColor {
                width: 35px;
                height: 38px;
                padding: 0;
                margin-right: -3px;
                border: 0;
                background-color: transparent;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                cursor: pointer;
            }

            .txColor {
                width: 28px;
                height: 28px;
                background-color: #000;
                border: 1px solid #000;
                cursor: pointer;

                &.contrast {
                    background-color: #fff;
                }
            }
        }

        .sInput {
            width: 100%;
            height: 40px;
            font-size: 16px;
            font-weight: 400;
            line-height: 17px;
            background: #FFFFFF;
            border: 0.5px solid #595959;
            box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
            border-radius: 4px;
        }
    }
}
</style>
<script setup>
import { ref } from 'vue';
let bg1 = null;
let bg2 = null;
let bodyId = document.getElementById('shell');

let bodyStyles = getComputedStyle(bodyId); // get css styles
let initG1 = bodyStyles.getPropertyValue('--g1').trim(); // ? why trim...? it's a mystery...
let initG2 = bodyStyles.getPropertyValue('--g2').trim();

let textColor = bodyStyles.getPropertyValue('--textColor').trim();
let isContrast = ref(textColor === 'white');

function returnColor() {

    // 직접 css 수정하기
    // bodyId.style.background =
    //     "linear-gradient("
    //     + "180deg, "
    //     + bg1.value
    //     + ","
    //     + bg2.value
    //     + ")";

    // css variable 만 수정하기
    bodyId.style.setProperty('--g1', bg1.value);
    bodyId.style.setProperty('--g2', bg2.value);
}

let textColorChange = function () {
    let bodyId = document.getElementById('shell');
    let icon = document.querySelectorAll('.icon');
    let tableWidth = document.querySelectorAll('.resizer');
    let miBtn = document.querySelector('.miBtn');

    isContrast.value = !isContrast.value;

    icon.forEach((e) => {
        e.classList.toggle('contrast');
    });

    tableWidth.forEach((e) => {
        e.classList.toggle('contrast');
    });

    miBtn.classList.toggle('contrast');

    let tc = isContrast.value ? 'white' : 'black';
    // if(isContrast.value) {
    //     tc = 'white';
    // }
    // else {
    //     tc = 'black';
    // }
    bodyId.style.setProperty('--textColor', tc);
};

</script>