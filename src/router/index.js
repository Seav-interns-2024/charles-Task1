import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/SignUp',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/',
      name: 'login',
      component: LogIn,
    }
  ]
})

export default router
