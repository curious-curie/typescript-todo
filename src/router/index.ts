import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('@/views/Home.vue').default,
    children: [
      {
        path: 'login',
        component: require('@/components/auth/Login.vue').default
      },
      {
        path: 'register',
        component: require('@/components/auth/Register.vue').default
      }
    ]
  },
  {
    path: '/:filter',
    name: 'todos',
    component: require('@/views/Home.vue').default
  }
]

const router = new VueRouter({
  routes
})

export default router
