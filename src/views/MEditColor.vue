<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
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
        li Color2
            input.bgColor.bgColor2(type="color")
        li Text
            input.bgColor.bgColor3(type="color")
        input.sInput(type='submit' value='Save')
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    ////////// change backgroud-color
    let bodyEditColor = document.getElementById('shell');
    let mecBtn = document.querySelector('.mecBtn');
    let mecColor = document.querySelector('.mecColor');
    let bgColor1 = document.querySelector('.bgColor1');
    let bgColor2 = document.querySelector('.bgColor2');
    let bgColor3 = document.querySelector('.bgColor3');
    let miBtn = document.querySelector('.miBtn');
    let miMenu = document.querySelector('.miMenu');

    // 색상 바꾸기
    function returnColor(){
        bodyEditColor.style.background =
            "linear-gradient("
            + "180deg, "
            + bgColor1.value
            + ","
            + bgColor2.value
            + ")";
        bodyEditColor.style.color = bgColor3.value;
    }

    bgColor1.addEventListener("input", returnColor)
    bgColor2.addEventListener("input", returnColor)
    bgColor3.addEventListener("input", returnColor)


    // click > 'block' or 'none'
    miBtn.addEventListener('click', () => {
        if(miMenu.style.display === 'none'){
            miMenu.style.display = 'block';
        } else {
            miMenu.style.display = 'none';
        }
    })

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

            img {
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

                        &:last-child {
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
                    width: 28px;
                    height: 28px;
                    padding: 0;
                    border: 0;
                    background-color: transparent;

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