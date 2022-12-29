import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Skapi } from 'skapi-js';
import './assets/main.css';

let skapi = new Skapi('ap22TRIuLoMn0qVUEAMs', '5cfb6cdc-d712-436f-aa1b-23c991e89823', true);
skapi.awaitConnection().then(c=>console.log({c}))

const app = createApp(App);

app.use(router);

app.mount('#app');

export { skapi };