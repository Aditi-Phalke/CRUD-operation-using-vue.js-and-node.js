// import Vue from 'vue'
// import VueRouter from 'vue-router'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';


  
import App from './App.vue'
import Create from './components/AddProduct.vue'
import Edit from './components/EditProduct.vue'
import Index from './components/ProductList.vue'
  

  
//Vue.config.productionTip = false
  
const routes = [
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: Edit
    },
    {
        name: 'Index',
        path: '/',
        component: Index
    },
];
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
  });
  
  Vue.createApp(App).use(router).mount('#app');