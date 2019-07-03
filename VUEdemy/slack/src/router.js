import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './pages/Login.vue'
import Chat from './pages/Chat.vue'
import { nextTick } from 'q';
import auth from 'firebase/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chat',
      component: Chat,
      beforeEnter: (to,from,next)=>{
        if(!firebase.auth().currentUser){
          next('/login')
        } else {
          next()
        }

      }
    
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
  mode: "history"
})

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')