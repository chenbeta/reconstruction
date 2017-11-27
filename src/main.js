// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios, {http } from '@/util/http';
import ElementUI from 'element-ui';

import VeeValidate from '@/util/validate.js';
import store from './vuex/store';

import './style/common.styl';
// import 'element-ui/lib/theme-default/index.css';
import '@/assets/theme/index.css';
import '@/assets/iconfont/iconfont.css';
import 'normalize.css';

Vue.use(ElementUI);
Vue.use(VeeValidate, {locale: 'zh_CN'});

Vue.config.productionTip = false;
Vue.prototype.http = http;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
