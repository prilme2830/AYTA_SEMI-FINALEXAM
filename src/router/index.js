import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../views/HomePage.vue'
import Expense from '../views/Expense.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        components: HomePage
    },
     {
        path: '/expense',
        name: 'Expense',
        components: Expense
    },
     {
        path: '/about',
        name: 'About',
        components: About
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router