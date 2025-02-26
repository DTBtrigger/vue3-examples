// import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Cakes from '@/views/Cakes.vue'
import Crisp from '@/views/Crisp.vue'
import HomePage from '@/views/HomePage.vue'
import News from '@/views/News.vue'
import NewsDetail from '@/views/NewsDetail.vue'
import Child from '@/views/communicatrion/01_props/Child.vue'
import Father from '@/views/communicatrion/01_props/Father.vue'
import Communication from '@/views/Communication.vue'
import { couldStartTrivia } from 'typescript'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
import FatherEvent from '@/views/communicatrion/02_custom-event/Father.vue'
import FatherProps from '@/views/communicatrion/01_props/Father.vue'

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('@/views/WelcomeView.vue')
//   },
//   {
//     path: '/homepage',
//     component: () => import('@/views/HomePage.vue')
//   },
//   {
//     path: '/crisp',
//     component: () => import('@/views/Crisp.vue')
//   },
//   {
//     path: '/cakes',
//     component: () => import('@/views/Cakes.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// export default router

const routes = [
  {
    name: 'homepage',
    path: '/homepage',
    component: HomePage
  },
  {
    name: 'crisp',
    path: '/crisp',
    component: Crisp
  },
  {
    name: 'cakes',
    path: '/cakes',
    component: Cakes
  },
  {
    name: 'news',
    path: '/news',
    component: News,
    children: [
      {
        name: 'detail',
        path: 'detail',
        component: NewsDetail,

        props(route: any) {
          return route.query
        }
      }
    ]
  },
  {
    name: 'communication',
    path: '/communication',
    component: Communication,
    children: [
      {
        name: 'props',
        path: 'props',
        component: FatherProps
      },
      {
        name: 'custom-event',
        path: 'custom-event',
        component: FatherEvent
      }
    ]
  },
  {
    path: '/',
    redirect: '/homepage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
