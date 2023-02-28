import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// let skapi = new Skapi('ap22TRIuLoMn0qVUEAMs', '5cfb6cdc-d712-436f-aa1b-23c991e89823', true);
// skapi.awaitConnection().then(c=>console.log({c}))

let skapi = new Skapi('ap22TX2pZEQ4JD8MwakK', '3b1bb233-aa92-46b6-83a2-ac2b501a787e');

const app = createApp(App);

app.use(router);

app.mount('#app');

export { skapi };