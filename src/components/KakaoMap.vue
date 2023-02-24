<template lang="pug">
#map(style="width:500px;height:400px;")
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    if(window.kakao && window.kakao.maps) {
        loadMap();
    } else {
        loadScript();
    }    

    function loadScript() {
        let script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=9923cd209720e7b744cf4da2e1256694&autoload=false";
        script.onload = () => window.kakao.maps.load(loadMap);
    
        document.head.appendChild(script);
    }
    loadScript();
    
    function loadMap() {
        let container = document.getElementById('map');
        let options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }
    
        this.map = new window.kakao.maps.Map(container, options);
        this.loadMaker();
    }
    
    function loadMaker() {
        let markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        let marker = new window.kakao.maps.Maker({
            position: markerPosition,
        });
    
        marker.setMap(this.map);
    }
});


</script>

<style lang="less"></style>