import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/anotacoes',
      name: 'anotacoes',
      component: () => import('./views/Anotacoes.vue')
    },
    
    {
      path: '/admin',
      name: 'admin',
    component: () => import('./views/Admin.vue')
    },
    {
      path: '/Login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },

    {
      path: '/reserva',
      name: 'reserva',
      component: () => import('./views/Reserva.vue')
    },

    {
      path: '/teste',
      name: 'teste',
      component: () => import('./views/teste.vue')
    }
  ]
})
