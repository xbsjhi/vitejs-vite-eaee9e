import Vue from 'vue';
import './style.css';
import App from './App.vue';
import TextInputHighlight from './TextInputHighlight';

Vue.use(TextInputHighlight);

new Vue(App).$mount('#app');
