<template lang="pug">
.wrap
    a.back(href="/")
        svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
            g
                g
                    path(d="M12,20l-8-8l8-8l1.37,1.35l-5.64,5.67H20v1.96H7.73l5.64,5.64L12,20z")
    .cal_wrap 
        .cal_nav 
            .year 
            .month 
            .goback
                .prev 
                    svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                        g
                            g
                                g
                                    polygon(points="16.78,5.55 15.22,4 8.78,10.45 8.78,10.45 7.22,12 7.22,12 7.22,12 8.78,13.55 8.78,13.55 15.22,20 16.78,18.45 10.33,12 			")
                .next   
                    svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                        g
                            g
                                g
                                    polygon(points="7.22,18.45 8.78,20 15.22,13.55 15.22,13.55 16.78,12 16.78,12 16.78,12 15.22,10.45 15.22,10.45 8.78,4 7.22,5.55 13.67,12 			")
        .cal_con 
            .days 
                .day Mo
                .day Tu
                .day We
                .day Th
                .day Fr
                .day Sa
                .day Su
            .dates
    .select
        .selectDate 2023.10.08
        .selectTime 21:00 PM 
            .modify 
                svg(version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve")
                    g
                        g
                            g
                                g(id="pZyuAt.tif_00000173878090243451044590000017940503185982544048_")
                                    g
                                        path(d="M20.73,6.4c-0.09,0.38-0.33,0.65-0.6,0.91c-0.47,0.45-0.93,0.92-1.39,1.38c-0.04,0.04-0.09,0.09-0.12,0.12c-1.18-1.18-2.36-2.36-3.55-3.55c0.02-0.02,0.06-0.06,0.09-0.1c0.45-0.45,0.89-0.89,1.34-1.34c0.7-0.7,1.64-0.7,2.34,0c0.44,0.43,0.86,0.87,1.3,1.3c0.27,0.26,0.5,0.53,0.58,0.9C20.73,6.15,20.73,6.28,20.73,6.4z")
                                        path(d="M3.57,20.69c-0.3-0.19-0.35-0.28-0.27-0.63c0.28-1.27,0.57-2.53,0.85-3.8c0-0.02,0.01-0.04,0.01-0.03c1.16,1.16,2.33,2.33,3.5,3.49C7.35,19.81,7,19.89,6.65,19.98c-0.94,0.23-1.88,0.46-2.83,0.68c-0.03,0.01-0.05,0.02-0.08,0.03C3.69,20.69,3.63,20.69,3.57,20.69z")
                                        path(d="M8.66,18.71c-1.16-1.15-2.33-2.32-3.49-3.48c2.99-2.99,5.98-5.98,8.96-8.96c1.15,1.15,2.32,2.32,3.48,3.48C14.65,12.72,11.66,15.71,8.66,18.71z")
    .input
        input(type='submit' value='Apply')
.modifyTime
    .close 
    .setTime 
        .time
            .hr
                .h(v-for="i in 12") {{ ('0' + i).slice(-2) }}
            .min
                .m(v-for="i in 60") {{ ('0' + (i - 1)).slice(-2) }}
            .dn 
                .ampm.am AM 
                .ampm.pm PM
    .btn
        input.cancel(type='submit' value='Cancel')
        input.save(type='submit' value='Save')
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let date = new Date(); // 현재 날짜
    let utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // utc 표준시
    let kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시
    let today = new Date(utc + kstGap); // 한국 시간 date

    let thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let currentYear = thisMonth.getFullYear();
    let currentMonth = thisMonth.getMonth();
    let currentDate = thisMonth.getDate();

    renderCalender(thisMonth);

    function renderCalender(thisMonth) {
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        let year = document.querySelector('.year');
        let month = document.querySelector('.month');
        let whatMonth = [ 'January', 'February', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        year.textContent = currentYear;
        month.textContent = whatMonth[currentMonth];

        let startDay = new Date(currentYear, currentMonth, 0);
        let prevDate = startDay.getDate();  // 저번달 마지막 날짜
        let prevDay = startDay.getDay();    // 저번달 마지막 요일

        let endDay = new Date(currentYear, currentMonth + 1, 0);
        let nextDate = endDay.getDate();    // 이번달 마지막 날짜
        let nextDay = endDay.getDay();      // 이번달 마지막 요일

        let calendar = document.querySelector('.dates')
        calendar.innerHTML = '';
        
        for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="date prev disable">' + i + '</div>'
        }
        
        for (let i = 1; i <= nextDate; i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="date current">' + i + '</div>'
        }
        
        for (let i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML = calendar.innerHTML + '<div class="date next disable">' + i + '</div>'
        }

        // 오늘 날짜 표기
        if (today.getMonth() == currentMonth) {
            let todayDate = today.getDate();
            let currentMonthDate = document.querySelectorAll('.dates .current');
            currentMonthDate[todayDate -1].classList.add('today');
        }

        let allDate = document.querySelectorAll('.date');

        allDate.forEach((e) => {
            e.addEventListener('click', () => {
                allDate.forEach((el) => {
                    el.classList.remove('selected');
                });
                e.classList.add('selected');
                
                let selected = document.querySelector('.selected');
                let selectDate = document.querySelector('.selectDate');
                let m;
                let d = selected.innerHTML;

                if(selected.classList.contains('prev')) {
                    m = (currentMonth + 12) % 12;
                } else if(selected.classList.contains('next')) {
                    m = (currentMonth + 2) % 12;
                } else {
                    m = currentMonth + 1;
                }

                if(m<10){
                    m = '0' + m;
                }

                if(d<10){
                    d = '0' + d;
                }

                let selectedDate = currentYear + '. ' + m + '. ' + d;
                selectDate.innerHTML = selectedDate;
            });
        });
    }

    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    prev.addEventListener('click', () => {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalender(thisMonth);
    });

    next.addEventListener('click', () => {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalender(thisMonth); 
    });
    
    let modify = document.querySelector('.modify');
    let modifyTime = document.querySelector('.modifyTime');
    let times = document.querySelector('.time').children;
    let close = modifyTime.querySelector('.close');
    
    modify.addEventListener('click', () => {
        modifyTime.style.bottom = '0px';
    });

    close.addEventListener('click', () => {
        modifyTime.style.bottom = '-400px';
    });

    let timeoutId;

    Array.from(times).forEach((el) => {
        el.addEventListener('scroll', () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                // let scrollPosition = window.scrollY;
                let scrollPosition = el.scrollTop;
                let viewportHeight = el.offsetHeight;
                let visiblePercentages = [];
                let eles = el.children;
    
                Array.from(eles).forEach(ele => {
                    let eleTop = ele.offsetTop;
                    let eleHeight = ele.offsetHeight;
                    let eleBottom = eleTop + eleHeight;
                    let visibleTop = Math.max(eleTop, scrollPosition);
                    let visibleBottom = Math.min(eleBottom, scrollPosition + viewportHeight);
                    let visibleHeight = visibleBottom - visibleTop;
                    let visiblePercentage = Math.round(visibleHeight / eleHeight * 100);
                    visiblePercentages.push(visiblePercentage);
                    console.log(eleTop, eleHeight, eleBottom, visibleTop, visibleBottom, visibleHeight, visiblePercentage)
                });
    
                let maxIndex = visiblePercentages.indexOf(Math.max(...visiblePercentages));
                let maxDiv = eles[maxIndex];
                let maxDivTop = maxDiv.offsetTop;
                let scrollToPosition = maxDivTop + maxDiv.offsetHeight / 2 - viewportHeight / 2;
                
                console.log(scrollPosition, viewportHeight, visiblePercentages,maxIndex, maxDiv, maxDivTop,scrollToPosition)
                
                el.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }, 100);
        });
    })

    


    

});
</script>

<style lang="less">
.wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 40px 20px;
    // overflow: scroll;

    .back {
        svg {
            width: 45px;
            height: 45px;
        }
    }
    .cal_wrap {
        margin-top: 40px;
        font-weight: 700;
    
        .cal_nav {
            display: flex;
            align-items: baseline;
    
            .year {
                font-size: 20px;
                margin-right: 12px;
            }
            .month {
                font-size: 28px;
            }
            .goback {
                display: flex;
                margin-left: auto;
                margin-top: auto;
    
                > div {
                    cursor: pointer;

                    &.prev {
                        margin-right: 24px;
                    }
                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
        .cal_con {
            padding: 30px 0;
            font-size: 20px;
            font-weight: 500;
    
            .days {
                display: flex;
                flex-wrap: nowrap;
                margin-bottom: 15px;
    
                .day {
                    text-align: center;
                    width: calc(100% / 7);
                }
            }
            .dates {
                display: flex;
                flex-wrap: wrap;
                height: 250px;
    
                .date {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    width: calc(100% / 7);
    
                    &::before {
                        position: absolute;
                        content: '';
                        width: 40px;
                        height: 40px;
                        background-color: rgba(255,255,255,0.7);
                        transition: all 0.3s;
                        border-radius: 4px;
                        opacity: 0;
                        z-index: -99;
                    }
                    &:hover::before { 
                        opacity: 1;
                    }
                    &.prev, &.next {
                        color: rgba(0,0,0,0.2);
                    }
                }
            }
        }
    }
    .select {
        font-weight: 700;
        font-size: 36px;
        
        > div {
            width: 100%;
            padding-top: 40px;
            vertical-align: bottom;
            text-align-last: left;
            position: relative;

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

            &.selectTime {
                display: flex;
                justify-content: space-between;

                .modify {
                    cursor: pointer;
                    svg {
                        width: 32px;
                        height: 32px;
                    }
                }
            }
        }
    }
    .input {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        cursor: pointer;

        input {
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
.modifyTime {
    position: absolute;
    content: '';
    left: 0;
    bottom: -400px;
    width: 100%;
    height: 360px;
    background-color: #fff;
    border-radius: 8px 8px;
    transition: all 0.3s;
    padding: 16px 20px 28px 20px;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;

    .close {
        width: 80px;
        height: 3px;
        border-radius: 2px;
        background-color: #d9d9d9;
        margin: 0 auto;
        cursor: pointer;
    }
    .setTime {
        position: relative;
        width: 100%;
        height: 130px;
        margin: 70px 0;
        // background-color: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        &::before,
        &::after {
        content: "";
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
        }

        &::before {
            top: 0;
            background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
            z-index: 99;
        }

        &::after {
            bottom: 0;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .time {
            width: 100%;
            height: 64px;
            position: relative;
            font-size: 36px;
            font-weight: 700;
            display: flex;
            line-height: 64px;
            text-align: center;

            &::before, 
            &::after {
                position: absolute;
                content: '';
                width: 100%;
                height: 1px;
                background-color: rgba(0,0,0,0.08);
            }
            &::before {
                top: 0;
            }

            &::after {
                bottom: 0;
            }

            > div {
                position: absolute;
                display: flex;
                flex-wrap: wrap;
                overflow: scroll;
                -ms-overflow-style: none; /* 인터넷 익스플로러 */
                scrollbar-width: none; /* 파이어폭스 */

                > div {
                    width: 100%;
                    height: 64px;
                }
                &.hr {
                    height: 192px;
                    left: 0;
                    // transform: translateY(-64px);
                    width: calc(100%/3);
                }
                &.min {
                    height: 192px;
                    left: calc(100%/3);
                    // transform: translateY(-64px);
                    width: calc(100%/3);
                }
                &.dn {
                    height: 128px;
                    right: 0;
                    // transform: translateY(0px);
                    width: calc(100%/3);
                }
                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }

    }
    .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;

        input {
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
</style>