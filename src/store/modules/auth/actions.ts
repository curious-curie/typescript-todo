import db from '@/main'
import { State, TodoConfig } from './types'
import { Commit } from 'vuex'

export default {
  loadTodos: (context: { commit: Commit, state: State }, payload: object) => {
    context.commit('LOAD_TODOS', payload)
  },
  addTodo (context: { commit: Commit, state: State }) {
    if (context.state.newTodo) {
      const todoItem = {
        title: context.state.newTodo,
        completed: false
      }
      context.commit('ADD_TODO', todoItem)
      db.collection('todos').doc(todoItem.title).set({
        title: context.state.newTodo,
        completed: false
      })
    }
  },
  setNewTodo (context: { commit: Commit, state: State }, todoInput: string) {
    context.commit('SET_NEW_TODO', todoInput)
  },
  clearNewTodo (context: { commit: Commit, state: State }) {
    context.commit('CLEAR_NEW_TODO')
  },
  deleteTodo (context: { commit: Commit, state: State }, todo: TodoConfig) {
    context.commit('DELETE_TODO', todo)
    db.collection('todos')
      .doc(todo.title)
      .delete()
  },
  toggleTodo (context: { commit: Commit, state: State }, todo: TodoConfig) {
    context.commit('TOGGLE_TODO', todo)
    const todoItem = { ...todo }
    todoItem.completed = !todo.completed
    db.collection('todos')
      .doc(todo.title)
      .set(todoItem)
  },
  clearCompleted (context: { commit: Commit, state: State }) {
    context.commit('CLEAR_COMPLETED')
    db.collection('todos').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (doc.data().completed) {
            db.collection('todos')
              .doc(doc.data().title)
              .delete()
          }
        })
      })
  },
  completeAll (context: { commit: Commit, state: State }) {
    context.commit('COMPLETE_ALL')
    db.collection('todos').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          if (!doc.data().completed) {
            db.collection('todos')
              .doc(doc.data().title)
              .set(
                { ...doc.data(), completed: true }
              )
          }
        })
      })
  }
}