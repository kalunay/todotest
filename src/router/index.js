import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksView from '@/components/TasksView.vue'
import TaskIdView from '@/components/TaskIdView.vue'
import AddTaskView from '@/components/AddTaskView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/task/:id',
    name: 'taskIdView',
    component: TaskIdView
  },
  {
    path: '/add',
    name: 'addTaskView',
    component: AddTaskView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
