// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Avatar, Dropdown, DropdownMenu, DropdownItem } from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.component('Button', Button);
Vue.component('Avatar', Avatar);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
