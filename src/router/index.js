import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TVShowsView from '../views/TVShowsView.vue'
import MoviesView from '../views/MoviesView.vue'
import NewPopularView from '../views/NewPopularView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tv-shows',
    name: 'tv-shows',
    component: TVShowsView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/new',
    name: 'new-popular',
    component: NewPopularView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'font-medium text-red-600 lg:text-white',
})

export default router
