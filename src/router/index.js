import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      meta:{title:"主页"}
    },
    {
      path:'/archives',
      name:'archives',
      component: (resolve) => require(['@/pages/archives'], resolve),
      meta:{title:"归档"}
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: (resolve) => require(['@/pages/article'], resolve),
      meta:{title:"文章"}
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve) => require(['@/pages/about'], resolve),
      meta:{title:"关于"}
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
