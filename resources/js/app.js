
import {createApp} from 'vue';

//require('./bootstrap');
//import './bootstrap';
import 'admin-lte/plugins/jquery/jquery.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';


import App from './App.vue';
import axios from 'axios';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router);
app.mount('#app');