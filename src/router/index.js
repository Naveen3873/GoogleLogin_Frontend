import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import Login from '../components/Login'
import Register from '../components/Register'
import Student from '../components/Student'
import Project from '../components/Project'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
