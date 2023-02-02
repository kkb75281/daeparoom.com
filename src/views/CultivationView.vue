<template lang="pug">
.header
    .title 
        img(src="@/assets/image/folder_open.svg")
        h2 Cultivation
    .info 
        h2 User Name
.table 
    table
        colgroup
            col(width='16%')
            col(width='45%')
            col(width='25%')
            col(width='14%')
        thead
            tr
                th Host
                th Title
                th Type
                th Date
        tbody
            tr
                td NIKE
                td “Whatever Whenever”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
            tr
                td NIKE
                td “Whatever Whenever”
                td(style="font-size:16px;") 
                    | Illustration,
                    br
                    | Interactive Art
                td 2022.04
</template>

<script setup>

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
        
        thead {
            position: relative;
            font-size: 24px;
            font-weight: 40;
            text-align: left;

            &::after {
                position: absolute;
                content: '';
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                width: 110%;
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
            }
        }
        tbody {
            font-size: 36px;
            font-weight: 700;

            tr {
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
            }

            td {
                padding: 10px 0;

                &:first-child {
                    padding-left: 100px;
                }
                &:last-child {
                    padding-right: 100px;
                }
            }
        }
    }
}
</style>