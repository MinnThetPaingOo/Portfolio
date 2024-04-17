import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Favorite from '../views/Favorite.vue'
import Projects from '../views/Projects.vue'
import Languages from '../views/Languages.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite
  },
  {
    path: '/',
    name: 'projects',
    component: Projects
  },
  {
    path: '/languages',
    name: 'languages',
    component: Languages
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
