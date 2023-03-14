<template lang="pug">
#map.map
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    if(window.kakao && window.kakao.maps) {
        setTimeout(() => { this.loadMap() }, 100)
    } else {
        loadScript();
    }    

    function loadScript() {
        let script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=9923cd209720e7b744cf4da2e1256694&autoload=false&libraries=services";
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

<style lang="less">
.map {
    width: 100%;
    height: 100%;
}
</style>