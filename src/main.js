import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from '@/App.vue';
import Router from "@/router";

import 'ant-design-vue/dist/antd.css';
import '@/assets/style/represent.css';
import UserSetting from '@/components/user-setting.js';

Vue.config.productionTip = false;
Vue.prototype.UserSetting = new UserSetting();

Vue.use(Antd);

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
