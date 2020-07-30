import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import axios from 'axios'

const api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "2eb17763bc92fced80f94b2f64f1ee05",
    "x-app-id": "b6e0e4a2"
  }
});

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    name: 'Food Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "food-details" */ '../pages/FoodDetails.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
