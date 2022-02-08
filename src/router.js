import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import("@/views/Index.vue"),
  }, {
    path: '/login',
    component: () => import("@/views/Login.vue")
  }, {
    path: '/new',
    component: () => import("@/views/New.vue")
  }, {
    path: '/reason/new/:agendaId',
    component: () => import("@/views/Reason/New.vue")
  },]
})

router.beforeEach((to, from, next) => {
  if(localStorage.user) {
    store.commit('setUser', JSON.parse(localStorage.user))
  }

  if(!store.state.user) {
    if(to.path !== '/login') {
      next('/login')
    }
  } else {
    if(to.path === '/login') {
      next('/')
    }
  }
  next()
})

export default router