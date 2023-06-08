import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Error from '../views/Error.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {

            path: '/product',
            name: 'product',
            component: Product
        }, {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: Error
        }
    ]
})

export default router
