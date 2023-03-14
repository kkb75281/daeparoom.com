<template lang="pug">
div(style="margin:10em;text-align:center;font-size:2em")
    div(style="display:inline-block;width:200px;height:200px;color:white" :style="{'background-color': bkcol}") {{ txt }}
    br
    button(@click="runPromise" :disabled="disabled") Click Me
    br
    button(@click="passivePromise" :disabled="disabled") Click Me (passive)
    br
    button(@click='checkFinished' :disabled="disabled") Check Finished
</template>
<script setup>
import { ref, computed } from 'vue';

let bkcol = ref('black');
let disabled = ref(false);

let txt = computed(() => {
    if (bkcol.value === 'black') {
        return 'idle';
    }
    else if (bkcol.value === 'red') {
        return 'running...';
    }
    else if (bkcol.value === 'green') {
        return 'finished!';
    }
});

let runningPromise = 0;

function passivePromise(){
    runningPromise = networkCall();

    runningPromise.then(r=>{
        runningPromise = 1;
    });
    
    console.log({runningPromise})
}

async function runPromise() {
    disabled.value = true;
    bkcol.value = 'red';

    let result = await networkCall();

    console.log({ result });
    bkcol.value = 'green';

    disabled.value = false;
}

async function checkFinished() {
    disabled.value = true;

    if (runningPromise instanceof Promise) {
        bkcol.value = 'red';
        let result = await runningPromise;
        console.log({ result });
        bkcol.value = 'green';
    }
    else if (runningPromise == 0) {
        bkcol.value = 'black';
    }
    else if (runningPromise === 1) {
        bkcol.value = 'green';
    }

    disabled.value = false;
}


function networkCall() {
    return new Promise(r => {
        setTimeout(() => {
            r('network result');
        }, 5000);
    });
}
</script>