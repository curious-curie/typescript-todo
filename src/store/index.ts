import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from './modules/todos'
import authModule from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos: todosModule,
    auth: authModule
  }
})
