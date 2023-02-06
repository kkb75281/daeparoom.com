<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
    .minfo 
        h2 U
.table 
    table
        tr.head
            td.draggable Host
                .handle
            td.draggable Title
                .handle
            td.draggable Type
                .handle
            td Date
        tbody.scroll
            tr.tit(@click='()=>changeActive(0)')
                td NIKE
                td “{{ titleArray[0] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[0] }")
                td.col(colspan="4")
                    img(src="@/assets/image/image1111.svg")
                    p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                    p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                //- td.col(colspan="4")
                //-     img(src="@/assets/image/image1111.svg")
                //-     p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                //-     p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                img.close(src="@/assets/image/up.svg")
            tr.tit(@click='()=>changeActive(1)')
                td SKAPI
                td “{{ titleArray[1] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class='{ "active": showArray[1] }')
                td.col(colspan="4")
                    img(src="@/assets/image/image1111.svg")
                    p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                    p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                img.close(src="@/assets/image/up.svg")
            tr.tit(@click='()=>changeActive(2)')
                td Personal
                td “{{ titleArray[2] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class='{ "active": showArray[2] }')
                td.col(colspan="4")
                    img(src="@/assets/image/image1111.svg")
                    p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                    p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                img.close(src="@/assets/image/up.svg")
.footer 
    img(src="@/assets/image/plus2.svg")
.mfooter 
    img(src="@/assets/image/plus.svg")
</template>

<script setup>
import { onMounted, ref } from 'vue';

let titleArray = [
    'Whatever Whenever',
    'blahblahblahblahblahblahsi',
    'hahahahahah'
]

let showArray = ref([
    false,
    false,
    false
])

function changeActive(idx) {
    showArray.value[idx] = !showArray.value[idx]
    // if(showArray[idx]) {
    //     showArray[idx] = false
    // }
    // else {
    //     showArray[idx] = true
    // }
}

onMounted(() => {
    // column width
    let handle = document.querySelectorAll('.draggable');

    handle.forEach(el => {
        el.addEventListener('mousedown', (e) => {
            let initialPosition = 0;
            let initialWidth = el.offsetWidth;
            initialPosition = e.x;

            // console.log("click", initialPosition);
            // console.log(el.offsetWidth);

            document.documentElement.addEventListener('drag', (e) => {
                console.log(el.style.width)
                // console.log(e.clientX)
                // console.log(initialWidth)
                // console.log(e.clientX - initialPosition)
                if(e.clientX !== 0) el.style.width = initialWidth + (e.clientX - initialPosition) + 'px';
            });
            
        });
    })

    // show content
    // let tr = document.querySelectorAll("tbody tr");

    // for(let i = 1; i<tr.length; i++) {
    //     tr[i].addEventListener('click', () => {
    //         if(!tr[i+1].classList.contains('active')){
    //             tr[i+1].classList.add('active');
    //         } else {
    //             tr[i+1].classList.remove('active');
    //         }
    //     })
    // }

    // close content
    let close = document.querySelectorAll('.close');

    for(let i=0; i<close.length; i++) {
        close[i].addEventListener('click', () => {
            showArray.value[i] = !showArray.value[i]
        })
    }
})





</script>

<style scoped lang="less">
.header {
    width: 100%;
    height: 168px;
    padding: 0 100px;
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    h2 {
        font-size: 24px;
        font-weight: 400;
    }

    .title {
        line-height: 0.1;
        display: flex;

        img {
            width: 40px;
            height: 40px;
            margin-right: 4px;
        }
    }

    .info {
        line-height: 0.1;
    }

    .minfo {
        width: 40px;
        height: 40px;
        font-size: 24px;
        background: #000;
        color: #fff;
        border-radius: 50%;
        line-height: 0.1;
        text-align: center;
        display: none;
    }
}

.table {
    table {
        width: 100%;
        border-spacing: 0;
        table-layout: fixed;

        tr {
            font-size: 36px;
            font-weight: 700;

            &.head {
                position: relative;
                height: 80px;
                font-size: 24px;
                font-weight: 40;
                text-align: left;

                &::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    bottom: 0;
                    // transform: translateX(-50%);
                    width: 100%;
                    height: 1px;
                    background-color: #000;
                }

                td {
                    width: 100%;
                    font-weight: 400;
                    font-size: 24px;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-use-select: none;
                    user-select: none;

                    &:first-child {
                        width: 190px;
                        // width: 16%;
                        padding-left: 100px;
                    }

                    &:nth-child(2) {
                        width: calc(100vw - 840px);
                        // width: 45%;
                    }

                    &:nth-child(3) {
                        width: 290px;
                        // width: 25%;
                    }

                    &:last-child {
                        width: 160px;
                        // width: 14%;
                        text-align: right;
                        padding-right: 100px;
                    }

                    &.draggable {
                        position: relative;
                        -webkit-user-select: all;
                        -moz-user-select: all;
                        -ms-use-select: all;
                        user-select: all;

                        .handle {
                            background: black;
                            position: absolute;
                            top: -8px;
                            right: -16px;
                            width: 16px;
                            height: 8px;
                            cursor: ew-resize;
                        }
                    }
                }
            }
        }

        .scroll {
            width: 100%;
            height: 100px;
            overflow: scroll;
            
            tr {
                &.tit {
                    width: 100%;
                    height: 80px;
                    position: relative;
                    transition: all 0.3s;
                    cursor: pointer;

                    &::after {
                        position: absolute;
                        content: '';
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 1px;
                        background-color: #000;
                    }

                    &:hover {
                        background-color: rgba(255, 255, 255, 0.5);
                    }

                    &:first-child::after {
                        display: none;
                    }

                    td {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        &:first-child {
                            padding-left: 100px;
                        }

                        &:last-child {
                            text-align: right;
                            padding-right: 100px;
                        }
                    }
                }

                &.con {
                    position: relative;
                    width: 100vw;
                    height: 595px;
                    padding: 40px 100px 120px 100px;
                    box-sizing: border-box;
                    display: none;
                    flex-wrap: nowrap;
                    overflow: scroll;

                    &.active {
                        display: flex;
                    }

                    .close {
                        position: absolute;
                        content: '';
                        right: 100px;
                        bottom: 50px;
                        width: 52px;
                        height: 52px;
                        cursor: pointer;
                    }

                    td {
                        &.col {
                            column-width: 350px;
                            // column-count: 3;
                            column-gap: 40px;

                            img {
                                width: 350px;
                            }

                            p { 
                                font-size: 24px;
                                font-weight: 700;
                                line-height: 26px;
                            }
                        }
                    }
                }
            }
        }
    }
}

.footer {
    text-align: center;
    margin-top: 20px;

    img {
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
}

.mfooter {
    position: absolute;
    right: 20px;
    bottom: 40px;
    display: none;

    img {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 780px) {
    .header {
        padding: 0 20px;
        padding-top: 40px;

        .info {
            display: none;
        }
        .minfo {
            display: block;
        }
    }

    .table {
        tr {
            &.head {
                td {
                    &:first-child {
                        display: none;
                    }

                    &:nth-child(2) {
                        width: 100%;
                        padding: 20px;
                        font-size: 20px;
                    }

                    &:nth-child(3) {
                        display: none;
                    }

                    &:last-child {
                        display: none;
                    }

                    &.draggable {
                        .handle {
                            display: none;
                        }
                    }
                }
            }
            &.tit {
                td {
                    &:first-child {
                        display: none;
                    }

                    &:nth-child(2) {
                        width: 100%;
                        padding: 20px !important;
                        font-size: 24px;
                    }

                    &:nth-child(3) {
                        display: none;
                    }

                    &:last-child {
                        display: none;
                    }
                }
            }
        }
    }

    .footer {
        display: none;
    }

    .mfooter {
        display: block;
    }
}
</style>