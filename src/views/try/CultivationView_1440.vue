<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
    .minfo 
        h2 U
.tableWrap
    table#resizeMe.table
        thead
            tr
                th.th Host
                th.th Title
                th.th Type
                th Date
        tbody
            tr.tit(@click='()=>changeActive(0)')
                td NIKE
                td “{{ titleArray[0] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[0] }")
                td(colspan="4" style='overflow: hidden;')
                    .slider__wrap
                        .slider__img
                            .slider__inner
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                                .slider.text-column
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                        .slider__btn
                            img.prev(src="@/assets/image/arrow_left.svg" alt="이전")
                            img.next(src="@/assets/image/arrow_right.svg" alt="다음")
                img.close(src="@/assets/image/up.svg")
                img.mclose(src="@/assets/image/up1.svg")
            tr.tit(@click='()=>changeActive(1)')
                td NIKE
                td “{{ titleArray[1] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[1] }")
                td(colspan="4" style='overflow: hidden;')
                    .slider__wrap
                        .slider__img
                            .slider__inner
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                                .slider.text-column
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                        .slider__btn
                            img.prev(src="@/assets/image/arrow_left.svg" alt="이전")
                            img.next(src="@/assets/image/arrow_right.svg" alt="다음")
                img.close(src="@/assets/image/up.svg")
                img.mclose(src="@/assets/image/up1.svg")
            tr.tit(@click='()=>changeActive(2)')
                td NIKE
                td “{{ titleArray[2] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[2] }")
                td(colspan="4" style='overflow: hidden;')
                    .slider__wrap
                        .slider__img
                            .slider__inner
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                                .slider.text-column
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                    | Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                    | Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                                .slider.image-column
                                    img(src="@/assets/image/image1111.svg")
                        .slider__btn
                            img.prev(src="@/assets/image/arrow_left.svg" alt="이전")
                            img.next(src="@/assets/image/arrow_right.svg" alt="다음")
                img.close(src="@/assets/image/up.svg")
                img.mclose(src="@/assets/image/up1.svg")
.footer 
    img(src="@/assets/image/plus2.svg")
.mfooter 
    img(src="@/assets/image/plus.svg")
button.chBtn(style="background-color: transparent; border: 0; cursor: pointer; font-size: 24px; font-weight: 400;") Change Color
.chColor(style="display: none;")
    input.bgColor1(type="color")
    input.bgColor2(type="color")
    input.bgColor3(type="color")
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
    ////////// column width
    const createResizableTable = function (table) {
        const cols = table.querySelectorAll('.th');
        [].forEach.call(cols, function (col) {
            const resizer = document.createElement('div');
            resizer.classList.add('resizer');

            resizer.style.position = 'absolute';
            resizer.style.top = '-8px';
            resizer.style.right = '-16px';
            resizer.style.width = `16px`;
            resizer.style.height = `8px`;
            resizer.style.backgroundColor = 'black';
            resizer.style.cursor = 'col-resize';
            resizer.style.userSelect = 'none';

            col.appendChild(resizer);

            createResizableColumn(col, resizer);
        });
    };

    const createResizableColumn = function (col, resizer) {
        let x = 0;
        let w = 0;

        const mouseDownHandler = function (e) {
            x = e.clientX;

            const styles = window.getComputedStyle(col);
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);

            resizer.classList.add('resizing');
        };

        const mouseMoveHandler = function (e) {
            const dx = e.clientX - x;
            col.style.width = `${w + dx}px`;
        };

        const mouseUpHandler = function () {
            resizer.classList.remove('resizing');
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        resizer.addEventListener('mousedown', mouseDownHandler);
    };

    createResizableTable(document.getElementById('resizeMe'));


    ////////// show content
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


    ////////// slider
    const sliderImg = document.querySelectorAll(".slider__img");       // 보여지는 영역
    const sliderInner = document.querySelectorAll(".slider__inner");   // 움직이는 영역
    const sliderBtnPrev = document.querySelectorAll(".prev");       //왼쪽버튼
    const sliderBtnNext = document.querySelectorAll(".next");       //오른쪽버튼

    for(let i=0; i<sliderImg.length; i++) {
        sliderBtnPrev[i].addEventListener("click", () => {
            sliderInner[i].style.transition = "all 400ms";
            sliderInner[i].style.transform = "translateX("+ 0 +"px)";
        });
    ql
        sliderBtnNext[i].addEventListener("click", () => {
            sliderInner[i].style.transition = "all 400ms";
            sliderInner[i].style.transform = "translateX("+ -(sliderInner[i].clientWidth - sliderImg[i].clientWidth) +"px)";
        });
    }



    ////////// close content(pc ver)
    let close = document.querySelectorAll('.close');

    for(let i=0; i<close.length; i++) {
        close[i].addEventListener('click', () => {
            showArray.value[i] = !showArray.value[i]
        })
    }

    ////////// close content(mobile ver)
    let mclose = document.querySelectorAll('.mclose');

    for(let i=0; i<mclose.length; i++) {
        mclose[i].addEventListener('click', () => {
            showArray.value[i] = !showArray.value[i]
        })
    }


    ////////// change backgroud-color
    let bodyColorChange = document.getElementById('shell');
    let chBtn = document.querySelector('.chBtn');
    let chColor = document.querySelector('.chColor');
    let bgColor1 = document.querySelector('.bgColor1');
    let bgColor2 = document.querySelector('.bgColor2');
    let bgColor3 = document.querySelector('.bgColor3');
    let linearDirection = document.getElementsByName("toDirection")[0]

    chBtn.addEventListener('click', () => {
        chColor.style.display = 'block';
    })

    function returnColor(){
        bodyColorChange.style.background =
            "linear-gradient("
            + "180deg, "
            + bgColor1.value
            + ","
            + bgColor2.value
            + ")";
        bodyColorChange.style.color = bgColor3.value;
    }

    // document.querySelector('select[name="toDirection"]').onchange = returnColor;
    bgColor1.addEventListener("input", returnColor)
    bgColor2.addEventListener("input", returnColor)
    bgColor3.addEventListener("input", returnColor)

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

.tableWrap {
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0 calc((100vw - 1400px)/2);

    .table {
        width: 1440px;
        // width: 100%;
        border-collapse: collapse;

        thead {
            tr {
                height: 80px;
                th {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 26px;
                    text-align: left;
                    position: relative;   

                    &:first-child {
                        width: 200px;
                        padding-left: 100px;
                    }

                    &:nth-child(2) {
                        // width: calc(100vw - 860px);
                        width: 580px;
                    }

                    &:nth-child(3) {
                        width: 300px;
                    }

                    &:last-child {
                        width: 160px;
                        padding-right: 100px;
                    }

                    .resizable {
                        height: 100px;
                        width: 100px;
                        position: relative;
                    }
                }
            }
        }

        tbody {
            tr {
                height: 80px;
                transition: all 0.3s;

                &.tit {
                    // border-top: 1px solid #000;
                    position: relative;
                    cursor: pointer;

                    &::after {
                        position: absolute;
                        content: '';
                        left: 50%;
                        top: 0;
                        transform: translateX(-50%);
                        width: 999%;
                        height: 100%;
                        background-color: rgba(255,255,255,0.5);
                        opacity: 0;
                        z-index: -999;
                        transition: all 0.3s;
                    }
                    
                    // &:hover {
                    //     background-color: rgba(255,255,255,0.5);
                    // }

                    &:hover::after {
                        opacity: 1;
                    }

                    td {
                        font-size: 36px;
                        font-weight: 700;
                        line-height: 39px;
                        user-select: none;

                        &::after {
                            position: absolute;
                            content: '';
                            left: 50%;
                            top: 0;
                            transform: translateX(-50%);
                            width: 999%;
                            height: 1px;
                            background: #000;
                        }

                        &:first-child {
                            padding-left: 100px;
                        }

                        &:nth-child(3) {
                            font-size: 16px;
                            line-height: 17px;
                        }

                        &:last-child {
                            padding-right: 100px;
                        }
                    }
                }

                &.con {
                    position: relative;
                    width: 1440px;
                    height: 595px;
                    box-sizing: border-box;
                    display: none;
                    flex-wrap: nowrap;


                    &.active {
                        display: table-row;
                    }

                    .close {
                        position: absolute;
                        content: '';
                        right: 40px;
                        bottom: 30px;
                        width: 52px;
                        height: 52px;
                        cursor: pointer;
                    }
                    
                    .mclose {
                        position: absolute;
                        content: '';
                        right: 40px;
                        bottom: 30px;
                        width: 40px;
                        height: 40px;
                        cursor: pointer;
                        display: none;
                    }

                    td {
                        .slider__wrap {
                            padding: 40px 100px 120px 100px;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                        }
                        .slider__img {
                            position: relative;
                            // width: calc(100vw - 200px);
                            width: 1220px;
                            height: 460px;
                            overflow: hidden;

                            &::before {
                                position: absolute;
                                content: '';
                                top: 0;
                                right: 0;
                                width: 100px;
                                height: 460px;
                                background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.7) 100%);
                                z-index: 9999;
                                // -webkit-backdrop-filter: blur(5px);
                                // backdrop-filter: blur(5px);
                            }

                            &::after {
                                position: absolute;
                                content: '';
                                top: 0;
                                left: 0;
                                width: 100px;
                                height: 460px;
                                background: linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255, 255, 255, 0.7) 100%);
                                z-index: 9999;
                                // -webkit-backdrop-filter: blur(5px);
                                // backdrop-filter: blur(5px);
                            }

                            .slider__inner {
                                display: flex;
                                flex-wrap: nowrap;
                                width: 200%;
                                height: 460px;

                                .slider {
                                    height: 460px;
                                    margin-right: 40px;

                                    &.image-column {
                                        column-width: 460px;
                                        column-gap: 40px;

                                        img{
                                            width: 460px;   
                                            height: 460px;
                                            object-fit: cover;
                                        }
                                    }

                                    &.text-column {
                                        column-width: 350px;
                                        column-gap: 40px;
                                        font-size: 24px;
                                        font-weight: 700;
                                        line-height: 26px;
                                    }

                                    &:last-child {
                                        margin-right: 0;
                                    }
                                }
                            }
                        }
                        .slider__btn {
                            img {
                                position: absolute;
                                transform: translate(-50%, -50%);
                                width: 52px;
                                height: 52px;
                                cursor: pointer;

                                &.prev {
                                    left: 50px;
                                }

                                &.next {
                                    right: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.footer {
    position: relative;
    text-align: center;
    margin-top: 20px;

    &::after {
        position: absolute;
        content: '';
        left: 50%;
        top: -20px;
        transform: translateX(-50%);
        width: 999%;
        height: 1px;
        background: #000;
    }

    img {
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
}

.mfooter {
    position: relative;
    text-align: right;
    padding: 20px 40px;
    display: none;

    &::after {
        position: absolute;
        content: '';
        left: 50%;
        top: 0px;
        transform: translateX(-50%);
        width: 999%;
        height: 1px;
        background: #000;
    }

    img {
        width: 48px;
        height: 48px;
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

    .tableWrap {
        .table {
            thead {
                tr {
                    th {
                        &:first-child {
                            display: none;
                        }
    
                        &:nth-child(2) {
                            width: 100%;
                            padding: 20px;
                            font-size: 20px;

                            > div {
                                display: none !important;
                            }
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
            tbody {
                tr {
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

                    &.con {
                        .close {
                            display: none;
                        }

                        .mclose {
                            display: block;
                        }

                        td {
                            .slider__wrap {
                                padding: 0 20px 80px 20px;
                            }
                            .slider__img {
                                position: relative;
                                width: calc(100vw - 40px);
                                height: 100%;

                                &::before {
                                    display: none;
                                }

                                &::after {
                                    display: none;
                                }
                            }
                            .slider__inner {
                                flex-wrap: wrap;
                                width: 100%;
                                height: 100%;

                                .slider {
                                    height: 100%;
                                    margin-right: 0;
                                    margin-bottom: 20px;

                                    &.image-column {
                                        column-width: 350px;
                                        column-gap: 20px;

                                        img{
                                            width: 350px;   
                                            height: 350px;
                                            object-fit: cover;
                                        }
                                    }
                                }
                            }
                            .slider__btn {
                                display: none;
                            }
                        }
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