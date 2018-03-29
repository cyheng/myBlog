import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import archives from '@/pages/archives'
import about from '@/pages/about'
import article from '@/pages/article'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{title:"主页"}
    },
    {
      path:'/archives',
      name:'archives',
      component: archives,
      meta:{title:"归档"}
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: article,
      meta:{title:"文章"}
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{title:"关于"}
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
