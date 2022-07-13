import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Menu from "../views/Menu.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/menu/",
    name: "menu",
    component: Menu,
     meta: {
  hideNavbar: true,
 }
  },
/*   {
    path: "/home",
    name: "noname",
  } */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
