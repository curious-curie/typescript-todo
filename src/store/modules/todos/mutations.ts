import * as types from './mutation-types'
import { State, TodoConfig } from './types'

export default {
  [types.ADD_TODO] (state: State, todoItem: TodoConfig) {
    state.todos.push(todoItem)
  },
  [types.SET_NEW_TODO] (state: State, todoInput: string) {
    state.newTodo = todoInput
  },
  [types.CLEAR_NEW_TODO] (state: State) {
    state.newTodo = ''
  },
  [types.DELETE_TODO] (state: State, todoItem: TodoConfig) {
    state.todos = state.todos.filter(item => item !== todoItem)
  },
  [types.TOGGLE_TODO] (state: State, todoItem: TodoConfig) {
    state.todos.splice(state.todos.indexOf(todoItem), 1, { ...todoItem, completed: !todoItem.completed })
  },
  [types.CLEAR_COMPLETED] (state: State) {
    state.todos = state.todos.filter(
      item => !item.completed
    )
  },
  [types.COMPLETE_ALL] (state: State) {
    state.todos = state.todos.map((todoItem) =>
      ({
        ...todoItem,
        completed: true
      }))
  },
  [types.LOAD_TODOS] (state: State, payload: any) {
    payload.onSnapshot((snapshot: any) => {
      state.todos = []
      snapshot.forEach((doc: any) => {
        state.todos.push(doc.data())
      })
    })
  }
}
