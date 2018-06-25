import Vue from 'vue';
import App from './app.vue';

import './assets/styles/test.css';
import './assets/styles/test-stylus.styl';
import './assets/images/bg.jpg';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root); //挂载app.vue中的组件，渲染并append到body里。