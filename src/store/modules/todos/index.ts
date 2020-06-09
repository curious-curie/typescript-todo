import actions from './actions'
import mutations from './mutations'
import { TodoState } from './types'

const initState: TodoState = {
  newTodo: null,
  todos: []
}

export default {
  namespaced: true,
  namespace: 'todosModule',
  state: initState,
  actions,
  mutations
}
