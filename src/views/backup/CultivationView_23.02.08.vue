<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
    .minfo 
        h2 U

table
    thead
        tr
            th(data-type="numeric") ID 
                span.resize-handle
            th(data-type="text-short") First name
                span.resize-handle
            th(data-type="text-short") Last name
                span.resize-handle
            th(data-type="text-short") Email
                span.resize-handle
    tbody
        tr
            td 000001
            td John
            td Doe
            td usermail@gmail.com
        tr
            td 000002
            td John
            td Doe
            td usermail@gmail.com

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


    const min = 150;
    const columnTypeToRatioMap = {
        numeric: 1,
        'text-short': 1.67,
        'text-long': 3.33 
    };


    const table = document.querySelector('table');

                                            
    const columns = [];
    let headerBeingResized;

    const onMouseMove = e => requestAnimationFrame(() => {
        console.log('onMouseMove');
        console.log(document.documentElement.scrollLeft);

        horizontalScrollOffset = document.documentElement.scrollLeft;
        const width = horizontalScrollOffset + e.clientX - headerBeingResized.offsetLeft;

        const column = columns.find(({ header }) => header === headerBeingResized);
        column.size = Math.max(min, width) + 'px'; // Enforce our minimum

        columns.forEach(column => {
            if (column.size.startsWith('minmax')) {// isn't fixed yet (it would be a pixel value otherwise)
                column.size = parseInt(column.header.clientWidth, 10) + 'px';
            }
        });


        table.style.gridTemplateColumns = columns.map(({ header, size }) => size).join(' ');});

        const onMouseUp = () => {
        console.log('onMouseUp');

        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        headerBeingResized.classList.remove('header--being-resized');
        headerBeingResized = null;
        };

        const initResize = ({ target }) => {
        console.log('initResize');

        headerBeingResized = target.parentNode;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        headerBeingResized.classList.add('header--being-resized');
        };

        document.querySelectorAll('th').forEach(header => {
        const max = columnTypeToRatioMap[header.dataset.type] + 'fr';
        columns.push({
            header,
            // The initial size value for grid-template-columns:
            size: `minmax(${min}px, ${max})` });

        header.querySelector('.resize-handle').addEventListener('mousedown', initResize);
    });









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




    // // close content(pc ver)
    // let close = document.querySelectorAll('.close');

    // for(let i=0; i<close.length; i++) {
    //     close[i].addEventListener('click', () => {
    //         showArray.value[i] = !showArray.value[i]
    //     })
    // }

    // // close content(mobile ver)
    // let mclose = document.querySelectorAll('.mclose');

    // for(let i=0; i<mclose.length; i++) {
    //     mclose[i].addEventListener('click', () => {
    //         showArray.value[i] = !showArray.value[i]
    //     })
    // }
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







table {
    min-width: 100vw;
    width: auto;
    -webkit-box-flex: 1;
            flex: 1;
    display: grid;
    border-collapse: collapse;
    grid-template-columns: 
        minmax(160px, 1fr)
        minmax(160px, 1.67fr)
        minmax(160px, 1.67fr)
        minmax(160px, 1.67fr);
}
 
thead,
tbody,
tr {
    display: contents;    
}
 
th,
td {
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 
th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: #5cb85c;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
    position: relative;
}
 
th:last-child {
    border: 0;
}
 
.resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    width: 3px;
    cursor: col-resize;
}
 
.resize-handle:hover,
.header--being-resized .resize-handle {
    opacity: 0.5;
}
 
th:hover .resize-handle {
    opacity: 0.3;
}
 
td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
}
 
tr:nth-child(even) td {
    background: #f8f6ff;
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
    text-align: right;
    margin-right: 20px;
    margin-bottom: 40px;
    display: none;

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









    .footer {
        display: none;
    }

    .mfooter {
        display: block;
    }
}
</style>