import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import MainLayout from './components/layout/main-layout/index.vue';

Vue.use(ElementUI);

export default new Vue({
  el: '#app',
  render: (h) => h(MainLayout),
});
