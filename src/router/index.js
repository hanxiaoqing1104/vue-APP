import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(Router)

const router = new Router({
  'mode': 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
})

export default router
