<template lang="pug">
.header
    .title 
        .icon
            svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                g
                    g
                        path(d="M3.78,19.61c-0.47,0-0.88-0.18-1.24-0.54C2.18,18.71,2,18.29,2,17.83V6.19c0-0.48,0.18-0.9,0.54-1.26s0.77-0.54,1.24-0.54h6.09l1.49,1.49h7.53c0.48,0,0.9,0.18,1.26,0.54c0.36,0.36,0.54,0.78,0.54,1.26H3.78v10.19l2.3-8.84H22l-2.34,8.97c-0.17,0.57-0.43,0.98-0.79,1.23c-0.36,0.25-0.84,0.37-1.44,0.37H3.78z")
        h2 Cultivation
    .mi
        .miBtn U
        .miMenu
            ul
                li
                    a(href="/accountsetting") Account Setting
                li
                    a(href="/logout") Log Out
                li
                    a(href="/meditcolor") Edit Color
.mec
    ul
        li Color1
            input.bgColor.bgColor1(type="color")
        li Text
            .txColor
        li Color2
            input.bgColor.bgColor2(type="color")
        input.sInput(type='submit' value='Save')
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    ////////// change backgroud-color
    let bodyId = document.getElementById('shell');
    let bgColor1 = document.querySelector('.bgColor1');
    let bgColor2 = document.querySelector('.bgColor2');
    let bgColor3 = document.querySelector('.bgColor3');
    let miBtn = document.querySelector('.miBtn');
    let miMenu = document.querySelector('.miMenu');

    // 색상 바꾸기
    function returnColor(){
        bodyId.style.background =
            "linear-gradient("
            + "180deg, "
            + bgColor1.value
            + ","
            + bgColor2.value
            + ")";
    }

    bgColor1.addEventListener("input", returnColor)
    bgColor2.addEventListener("input", returnColor)


    // click > 'block' or 'none'
    miBtn.addEventListener('click', () => {
        if(miMenu.style.display === 'none'){
            miMenu.style.display = 'block';
        } else {
            miMenu.style.display = 'none';
        }
    })


    // icon contrast
    let txColor = document.querySelector('.txColor');
    let icon = document.querySelectorAll('.icon');
    let tableWidth = document.querySelectorAll('.resizer');
    let cnum = 0;

    txColor.addEventListener('click', function(){
        cnum++;
        icon.forEach((e) => {
            e.classList.toggle('contrast');
        });
        tableWidth.forEach((e) => {
            if(cnum%2 == 1) {
                e.style.backgroundColor = 'white'
            } else {
                e.style.backgroundColor = 'black'
            }
        });
        miBtn.classList.toggle('contrast');
        txColor.classList.toggle('contrast');
        bodyId.classList.toggle('contrast');
    });

})





</script>

<style scoped lang="less">
@media (max-width: 780px) {
    .header {
        width: 100%;
        height: 80px;
        padding: 40px 20px 0 20px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        h2 {
            font-size: 24px;
            font-weight: 400;
        }

        .title {
            margin-right: 30px;
            line-height: 0.1;
            display: flex;

            .icon {
                width: 40px;
                height: 40px;
                margin-right: 4px;
            }
        }

        .mi {
            position: relative;

            .miBtn {
                position: relative;
                margin-top: auto;
                width: 40px;
                height: 40px;
                text-align: center;
                font-size: 24px;
                color: #fff;
                border-radius: 50%;
                background-color: #000;
                cursor: pointer;

                &.contrast {
                    background-color: #fff;
                    color: #000;
                }   
            }

            .miMenu {
                position: absolute;
                content: '';
                right: 0;
                bottom: -200px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25), inset -1px -1px 2px rgba(0, 0, 0, 0.25), inset 1px 1px 2px rgba(255, 255, 255, 0.65);
                z-index: 999;
                display: none;
        
                ul {
                    width: 212px;
                    box-sizing: border-box;
                    list-style: none;
                    margin: 0;
                    padding: 20px 12px; 
        
                    li {
                        padding: 10px 0 10px 10px;
                        margin-bottom: 8px;

                        &:nth-child(2) {
                            margin-bottom: 0;
                        }
                        &:hover {
                            background-color: rgba(0,0,0,0.04);
                            border-radius: 4px;
                        }

                        a {
                            text-align: center;
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 22px;
                            text-decoration: none;
                            color: #000;
                        }
                    }
                }
            }
        }
    }

    .mec {
        width: 100%;
        height: calc(100vh - 80px);
        padding: 80px 0 40px 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        ul {
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
                margin-bottom: 170px;

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
                width: 113px;
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
}
</style>