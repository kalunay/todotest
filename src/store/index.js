import Vue from 'vue'
import Vuex from 'vuex'
import tasksList from '@/assets/tasks.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: tasksList.sort((task1, task2) => task1.id - task2.id),
  },
  getters: {
  },
  mutations: {
    setTasks(state, task){
      state.tasks = [...state.tasks, task];
    },
    removeTasks(state, task){
      state.tasks = state.tasks.filter(item => item.id !== task.id);
    },
    updateTask(state, task){
      let index = state.tasks.findIndex(item => item.id === task.id);
      state.tasks[index] = task;
    }
  },
  actions: {
  },
  modules: {
  }
})
