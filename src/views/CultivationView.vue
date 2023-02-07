<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
    .minfo 
        h2 U
//- .table 
//-     table
//-         tr.head
//-             td.draggable(nowrap width="160") Host
//-                 .handle
//-             td.draggable(nowrap width="160") Title
//-                 .handle
//-             td.draggable(nowrap width="160") Type
//-                 .handle
//-             td(nowrap width="160") Date
//-         tbody.scroll
//-             tr.tit(@click='()=>changeActive(0)')
//-                 td NIKE
//-                 td “{{ titleArray[0] }}”
//-                 td(style="font-size:16px;") 
//-                     | Illustration,
//-                     br
//-                     | Interactive Art
//-                 td 2022.04
//-             tr.con(:class="{ 'active': showArray[0] }")
//-                 td.col(colspan="4")
//-                     img(src="@/assets/image/image1111.svg")
//-                     p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
//-                     p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
//-                 //- td.col(colspan="4")
//-                 //-     img(src="@/assets/image/image1111.svg")
//-                 //-     p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
//-                 //-     p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
//-                 img.close(src="@/assets/image/up.svg")
//-             tr.tit(@click='()=>changeActive(1)')
//-                 td SKAPI
//-                 td “{{ titleArray[1] }}”
//-                 td(style="font-size:16px;") 
//-                     | Illustration,
//-                     br
//-                     | Interactive Art
//-                 td 2022.04
//-             tr.con(:class='{ "active": showArray[1] }')
//-                 td.col(colspan="4")
//-                     img(src="@/assets/image/image1111.svg")
//-                     p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
//-                     p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
//-                 img.close(src="@/assets/image/up.svg")
//-             tr.tit(@click='()=>changeActive(2)')
//-                 td Personal
//-                 td “{{ titleArray[2] }}”
//-                 td(style="font-size:16px;") 
//-                     | Illustration,
//-                     br
//-                     | Interactive Art
//-                 td 2022.04
//-             tr.con(:class='{ "active": showArray[2] }')
//-                 td.col(colspan="4")
//-                     img(src="@/assets/image/image1111.svg")
//-                     p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
//-                     p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
//-                 img.close(src="@/assets/image/up.svg")




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
                .slider__wrap
                    .slider__img
                        .slider__inner
                            .slider.image-column(style='column-width: 450px')
                                img(src="@/assets/image/image1111.svg" style='width: 450px; height: 450px; object-fit: cover;')
                            .slider.text-column(style='column-width: 350px; column-gap: 40px;')
                                p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                                p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                    .slider__btn
                        .prev
                            img(src="@/assets/image/arrow_left.svg" alt="이전")
                        .next
                            img(src="@/assets/image/arrow_right.svg" alt="다음")
                img.close(src="@/assets/image/up.svg")
            tr.tit(@click='()=>changeActive(1)')
                td NIKE
                td “{{ titleArray[1] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[1] }")
                td(colspan="4" style='column-count: 4; column-gap: 40px; padding: 0 100px;')
                    .image-column(style='column-width: 450px')
                        img(src="@/assets/image/image1111.svg" style='width: 450px; height: 450px; object-fit: cover;')
                    .text-column(style='column-width: 350px; column-gap: 40px;')
                        p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                        p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                    .image-column(style='column-width: 450px')
                        img(src="@/assets/image/image1111.svg" style='width: 450px; height: 450px; object-fit: cover;')
                    .text-column(style='column-width: 350px; column-gap: 40px;')
                        p Are you looking for a Nike logo font that will make your design stand out? If so, then you have come to the right place. Among the most popular typefaces available for Photoshop is the Nike font pack. You can also use the font pack to generate text in other applications. It is a typeface that is suitable for use on websites and in games due to its high accessibility and 22 styles. This typeface will be of great use in the development of websites and games due to the strength of its accessibility. The Nike font can be found here.
                        p Designers have to figure out a way to encourage people to fill them out. Yet, if you add one form field too many, you can expect your conversion rate to plummet. How do some signup forms strike this balance? We’ll take a look at 20 inspiring signup forms and find out what makes them work.
                img.close(src="@/assets/image/up.svg")
            tr.tit(@click='()=>changeActive(2)')
                td NIKE
                td “{{ titleArray[2] }}”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con(:class="{ 'active': showArray[2] }")
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
    const createResizableTable = function (table) {
        const cols = table.querySelectorAll('.th');
        [].forEach.call(cols, function (col) {
            // Add a resizer element to the column
            const resizer = document.createElement('div');
            resizer.classList.add('resizer');

            // Set the height
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


    const sliderWrap = document.querySelector(".slider__wrap");
    const sliderImg = document.querySelector(".slider__img");       // 보여지는 영역
    const sliderInner = document.querySelector(".slider__inner");   // 움직이는 영역
    const slider = document.querySelectorAll(".slider"); 
    const sliderBtn = document.querySelector(".slider__btn");    //버튼
    const sliderBtnPrev = document.querySelector(".prev");       //왼쪽버튼
    const sliderBtnNext = document.querySelector(".next");       //오른쪽버튼

    let currentIndex = 0;                       //현재 이미지
    let sliderCount = slider.length;            //이미지 갯수
    let sliderWidth = sliderImg.offsetWidth;    //이미지 가로값

    // 이미지 움직이는 영역
    function gotoSlider(num){
        sliderInner.style.transition = "all 400ms";
        sliderInner.style.transform = "translateX("+ -sliderWidth * num +"px)";
        currentIndex = num;
    }

    // 왼쪽 버튼을 클릭했을 때
    sliderBtnPrev.addEventListener("click", () => {
        let prevIndex = (currentIndex + (sliderCount -1)) % sliderCount
        console.log(prevIndex)
        // 4, 1, 2, 3, 4, 1, 2, ...
        gotoSlider(prevIndex);
    });

    // 오른쪽 버튼을 클릭했을 때
    sliderBtnNext.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % sliderCount
        console.log(nextIndex)
        // 1, 2, 3, 4, 0, 1, 2, ...
        gotoSlider(nextIndex);
    });




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

.tableWrap {
    width: 100vw;

    .table {
        width: 100%;
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
                        width: calc(100vw - 860px);
                        // width: 580px;
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
                    border-top: 1px solid #000;

                    &:hover {
                        background-color: rgba(255,255,255,0.5);
                    }

                    td {
                        font-size: 36px;
                        font-weight: 700;
                        line-height: 39px;

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
                    width: 100vw;
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

                    td {
                        &.col {
                            padding: 40px 100px 120px 100px;
                            column-width: 450px;
                            column-gap: 40px;
                            overflow: scroll;

                            img {
                                width: 450px;
                                height: 450px;
                                object-fit: cover;
                            }

                            p { 
                                // width: 350px;
                                font-size: 24px;
                                font-weight: 700;
                                line-height: 26px;
                            }
                        }
                    }




                    /* slider */
                    .slider__wrap {
                        padding: 40px 100px 120px 100px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
                    /* 이미지 보이는 부분 */
                    .slider__img {
                        position: relative;
                        width: 100%;
                        height: 460px;
                        overflow: hidden;
                    }
                    /* 이미지 감싸고 있는 부모 : 움직이는 부분 */
                    .slider__inner {
                        display: flex;
                        flex-wrap: nowrap;
                        width: 100%;
                        height: 460px;
                    }
                    /* 개별적인 이미지 */
                    .slider {
                        width: 460px;
                        height: 460px;
                    }
                    .slider img{
                        width: 460px;
                        height: 460px;
                        object-fit: cover;
                    }

                    .slider__btn {
                        div {
                            position: absolute;
                            top: 45%;
                            transform: translateY(-50%);
                            width: 52px;
                            height: 52px;
                            text-align: center;
                            line-height: 50px;
                            transition: all 0.2s;
                            display: block;
                            cursor: pointer;

                            img {
                                position: relative;
                                width: 100%;
                                height: 100%;

                                &::after {
                                    content: "";
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    right: 0;
                                    height: 100px;
                                    background: linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
                                }
                            }

                            &.prev {
                                left: 40px;

                                img {
                                    &::before {
                                        left: 0;
                                    }
                                }
                            }

                            &.next {
                                right: 40px;

                                img {
                                    &::before {
                                        right: 0;
                                    }
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