// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from "axios";
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import token from './token/token.js';
//全局注册MD5
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
//使用elementUI组件
Vue.use(ElementUI);
//全局注册axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//注册全局变量token
Vue.prototype.$token = token;
/*注册全局ip地址*/
Vue.prototype.$ip = 'http://192.168.2.141:9999';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
