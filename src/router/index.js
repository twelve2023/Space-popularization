import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import LoginIndex from '@/views/Login/index.vue'
import InlandAero from '@/views/InlandAero/index.vue'
import Dream from '@/views/Dream/index.vue'
import Astronaut from '@/views/Astronaut/index.vue'
import Layout from '@/views/Layout/index.vue'
import NewsDetail from '@/views/NewsDetail/index.vue'
import Login from '@/views/Login/components/Login.vue'
import Register from '@/views/Login/components/Register.vue'
import News from '@/views/News/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: LoginIndex,
      children:[
        {
          path: '/login',
          component: Login,
        },
        {
          path: '/register',
          component: Register,
        },
      ]
    },
    {
      path:'/layout',
      component:Layout ,
      children:[
        {
          path:'',
          component:InlandAero
        },
        {
          path:'/dream',
          component:Dream
        },
        {
          path:'/astronaut',
          component:Astronaut
        },
        {
          path:'/detail/:id',
          component:NewsDetail
        },
        {
          path:'/news/:id',
          component:News
        }
      ]
    }
   
  ]
})

export default router
