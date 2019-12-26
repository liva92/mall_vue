/*
 * @Author: liva
 * @Date: 2019-12-14 14:48:44
 * @LastEditors  : liva
 * @LastEditTime : 2019-12-26 15:28:50
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyLoad from "vue-lazyload";
import FastClick from "fastclick";
//入口引入toast插件
import toast from "components/common/toast";
//使用toast插件
Vue.use(toast);
FastClick.attach(document.body);
Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require("assets/img/common/placeholder.png")
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
