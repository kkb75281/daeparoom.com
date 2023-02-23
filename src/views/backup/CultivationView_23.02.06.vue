<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
.table 
    table
        //- colgroup
        //-     col(width='16%')
        //-     col(width='45%')
        //-     col(width='25%')
        //-     col(width='14%')
        thead
            tr
                th.draggable Host
                th Title
                th Type
                th Date
        tbody
            tr.tit
                td NIKE
                td “Whatever Whenever”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con 
                td(colspan="4")
                    img(src="@/assets/image/image1111.svg")
            tr.tit
                td SKAPI
                td “blahblahblahblahblahblahsi”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con 
                td(colspan="4") sldkfjdlskfjlsdkfjklsfj
            tr.tit
                td Personal
                td "hahahahahah"
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr.con
                td(colspan="4") sldkfjdlskfjlsdkfjklsfj
</template>

<script setup>
// let t = Array.prototype.slice.call(document.querySelectorAll('tbody tr'))
// var t = document.querySelectorAll("tbody tr");

// console.log(t)

// for(let i = 0; i<t.length; i++) {
//     t[i].addEventListener('click', () => {
//         if(!t[i+1].contains('active')){
//             t[i+1].classList.add('active');
//         } else {
//             t[i+1].classList.remove('active');
//         }
//     })
// }



// let tbody = document.querySelector('tbody');

// console.log(tbody.children)

// for(let k = 0; k < 3; k++){
//     let i1 = tbody.children[k];
//     let i2 = tbody.children[k+1];

//     i1.addEventListener('click', () => {
//         if(!i2.contains('active')){
//             i2.classList.add('active');
//         } else {
//             i2.classList.remove('active');
//         }
//     })
// }



let handle = document.querySelector('.draggable');
console.log(handle)
let initialPosition = 0;

handle.addEventListener('mousedown', (e) => {
    let td = document.querySelector('.draggable');
    let initialWidth = td.offsetWidth;
    initialPosition = e.x;
    console.log("click", initialPosition);
    console.log(td.offsetWidth);
    document.documentElement.addEventListener('drag', (f) => {
        console.log(f.clientX - initialPosition, initialWidth);
        if(f.clientX !== 0) td.style.width = initialWidth + (f.clientX - initialPosition) + 'px';
    });
});





</script>

<style scoped lang="less">
.header {
    width: 100%;
    padding: 0 100px;
    margin-top: 40px;
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
}

.table {    
    table {
        width: 100%;
        margin-top: 80px;
        border-spacing: 0;
        table-layout: fixed;
        
        thead {
            position: relative;
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

            th {
                font-weight: 400;
                font-size: 24px;
                padding-bottom: 20px;

                &:first-child {
                    padding-left: 100px;
                }
                &:last-child {
                    padding-right: 100px;
                }

                &.draggable {
                    min-width: 160px;
                    position: relative;
                }

                &.handle {
                    background: red;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 10px;
                }
            }
        }
        tbody {
            font-size: 36px;
            font-weight: 700;
            .tit {
                width: 100%;
                position: relative;
                transition: all 0.3s;
                cursor: pointer;

                &::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #000;
                }

                &:hover {
                    background-color: rgba(255,255,255,0.5);
                }

                &:last-child {
                    display: none;

                    &.active {
                        display: block;
                    }
                }

                td {
                    padding: 20px 0;
                    min-width: 160px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    &:first-child {
                        padding-left: 100px;
                    }
                    &:last-child {
                        padding-right: 100px;
                    }
                }
            }

            .con {
                position: relative;
                display: none;
                &.active {
                    display: block;
                }

                &::after {
                    position: absolute;
                    content: '';
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #000;
                }

                td {
                    padding: 40px 100px;
                }
            }
        }
    }
}

// @media (max-width: 780px) {
//     #main {
//         flex-wrap: wrap;
//         align-items: flex-start;
//         flex-direction: column;

//         p {
//             font-size: 14px;
//             font-weight: 300;
//             bottom: 0;
//         }
//     }
//     .left {
//         width: 100%;
//         height: 360px;

//         & > div {
//             height: 180px;
//             text-align: bottom;
//             padding: 20px;

//             &:last-child {
//                 border-bottom: 1px solid #000;
//             }

//             img {
//                 width: 60px;
//                 height: 60px;
            
//                 &.goto {
//                     right: 100px;
//                     bottom: 20px;
//                     width: 60px;
//                     height: 60px;
//                 }
//             }

//             & > div {
//                 position: absolute;
//                 left: 20px;
//                 bottom: 20px;
//             }

//             h2 {
//                 font-size: 36px;
//             }
//         }
//     }
//     .right {
//         width: 100%;
//         height: 180px;
//         padding-top: 45px;

//         h3 {
//             font-size: 16px;
//         }
//     }
// }
</style>