import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa il bundle JavaScript

createApp(App).use(router).mount('#app');
