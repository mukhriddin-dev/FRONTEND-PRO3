import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/',
                    name: 'home-page',
                    component: () => import ("../views/Home/Home.vue")
                }, {

                    path: '/category',
                    name: 'category',
                    component: () => import ("../views/Category/Category.vue")
                }, {

                    path: '/products',
                    name: 'product',
                    component: () => import ("../views/Product/Product.vue"),
                    beforeEnter: (to, from) => {
                        console.log(localStorage.getItem("isActive"))

                        if (localStorage.getItem('isActive')) {
                            return true
                        }
                        
                        return false

                    }
                }
            ]
        }, {
            path: "/login",
            name: 'login',
            component: () => import ("../views/Login/Login.vue")
        }

    ]
})

// GOOD
router.beforeEach((to, from, next) => {
    if (to.name !== "login" && !localStorage.getItem("token")) {
        next({name: "login"})
    }

    next()

})

export default router
