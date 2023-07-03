import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createPinia } from 'pinia'

import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Corousal from './components/Corousal.vue'
import Footer from './components/Footer.vue'
import Cartview from './components/Cartview.vue';

import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Store from './pages/Store.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/cart', component: Cart },
        { path: '/store', component: Store },
    ]
});

const app = createApp(App)
const pinia = createPinia()

app.component('navbar', Navbar);
app.component('corousal', Corousal);
app.component('app-footer', Footer);
app.component('cart-view', Cartview);

app.use(Bootstrap)
app.use(router)
app.use(pinia)

app.mount('#app')