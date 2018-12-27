import Vue from 'vue'
import Router from 'vue-router'
import Fa from '@/components/fa'
import Shi from '@/components/shi'
import Mine from '@/components/mine'
import Peng from '@/components/peng'
import Zhang from '@/components/zhang'
import Box from '@/components/box/box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/box/fa'
    },
    {
      path: '/box',
      name: 'box',
      component: Box,
      children:[
        {
          path: '/box/fa',
          name: 'Fa',
          component: Fa
        },{
          path: '/box/shi',
          name: 'Shi',
          component: Shi
        },{
          path: '/box/mine',
          name: 'Mine',
          component: Mine
        },{
          path: '/box/peng',
          name: 'Peng',
          component: Peng
        },{
          path: '/box/zhang',
          name: 'Zhang',
          component: Zhang
        }
      ]
    }
  ]
})
