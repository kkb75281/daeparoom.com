import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// let skapi = new Skapi('ap22TRIuLoMn0qVUEAMs', '5cfb6cdc-d712-436f-aa1b-23c991e89823', true);
// skapi.awaitConnection().then(c=>console.log({c}))

let skapi = new Skapi('ap22Z0oDV9YN1w3rodru', 'ad5cb248-44f8-4f82-8f4d-655167007594');

const app = createApp(App);

app.use(router);

app.mount('#app');

export { skapi };