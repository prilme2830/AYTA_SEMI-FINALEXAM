import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import Expense from '../views/Expense.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/expense', name: 'expense', component: Expense },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
