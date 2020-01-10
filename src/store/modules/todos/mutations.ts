import * as types from './mutation-types'
import { TodoState, TodoConfig } from './types'

export default {
  [types.ADD_TODO] (state: TodoState, todoItem: TodoConfig) {
    state.todos.push(todoItem)
  },
  [types.SET_NEW_TODO] (state: TodoState, todoInput: string) {
    state.newTodo = todoInput
  },
  [types.CLEAR_NEW_TODO] (state: TodoState) {
    state.newTodo = ''
  },
  [types.DELETE_TODO] (state: TodoState, todoItem: TodoConfig) {
    state.todos = state.todos.filter(item => item !== todoItem)
  },
  [types.TOGGLE_TODO] (state: TodoState, todoItem: TodoConfig) {
    state.todos.splice(state.todos.indexOf(todoItem), 1, { ...todoItem, completed: !todoItem.completed })
  },
  [types.CLEAR_COMPLETED] (state: TodoState) {
    state.todos = state.todos.filter(
      item => !item.completed
    )
  },
  [types.COMPLETE_ALL] (state: TodoState) {
    state.todos = state.todos.map((todoItem) =>
      ({
        ...todoItem,
        completed: true
      }))
  },
  [types.LOAD_TODOS] (state: TodoState, payload: any) {
    payload.onSnapshot((snapshot: any) => {
      state.todos = []
      snapshot.forEach((doc: any) => {
        state.todos.push(doc.data())
      })
    })
  }
}
