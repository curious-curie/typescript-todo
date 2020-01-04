import actions from './actions'
import mutations from './mutations'
import { State } from './types'

const initState: State = {
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
