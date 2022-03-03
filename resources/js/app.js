import $ from 'jquery';
window.$ = window.jQuery = $;

require('./bootstrap');
import * as Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import VueCookies from 'vue3-cookies';
import {routes} from './router';
import {checkToken} from "./helper";

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = Vue.createApp({
    data() {
        return {
            siteName: '',
            loggedIn: false
        }
    },
    mounted() {
        let rootContainer = $(this.$el.parentNode);
        this.siteName = rootContainer.data('site-name');
        checkToken(this);
    }
});

app.use(router);
app.use(VueCookies);
app.component('navigation', require('./components/Navigation').default);
app.component('footer-view', require('./components/FooterView').default);

axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';

app.config.globalProperties.$axios = axios;

app.mount('#app');
