import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
/*   {
    path: "/blog/",
    name: "blog-home",
    component: () =>
      import('../views/Blog.vue')
  }, */
  {
    path: "/home",
    name: "noname",
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
