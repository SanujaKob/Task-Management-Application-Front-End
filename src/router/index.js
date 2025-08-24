import { createRouter, createWebHistory } from 'vue-router'
// use relative path so it works 100%
import HomeView from '../views/home_view.vue'

const routes = [{ path: '/', name: 'home', component: HomeView }]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
