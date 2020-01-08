<template>
  <div class="container">

      <input
          placeholder="What needs to be done?"
          v-on:keyup.enter="addTodoItem"
          @change="setNewTodo($event.target.value)"
          :value="newTodo">
      <Todo
        class = "todo__container"
        :class="{ completed: todo.completed }"
        v-for="todo in filteredTodos"
        :key="todo.title"
        :todo="todo"
        @deleteTodo="deleteTodo(todo)"
        @toggleTodo="toggleTodo(todo)"
      />

      <div class="footer">
        <div>
        <button @click="clearCompleted">clear completed</button>
        <button @click="completeAll">complete all</button>
        </div>
        <div v-for="filter in ['all', 'active', 'completed']" :key="filter" class="filters">
          <router-link :to = "{ path: filter }"><button :class ="{ active: selectedFilter === filter}">{{ filter }}</button></router-link>
        </div>
      </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { TodoConfig } from '@/store/modules/todos/types'
import Todo from './Todo.vue'
import db from '@/main'
import { mapActions, mapState } from 'vuex'

const filters = (selected: string) => (todos: TodoConfig[]) => {
  return todos.filter(todo => {
    switch (selected) {
      case ('all'): return todo
      case ('active'): return !todo.completed
      case ('completed'): return todo.completed
      default: return todo
    }
  })
}

@Component({
  components: {
    Todo
  },
  computed: {
    ...mapState('todos', [
      'todos',
      'newTodo'
    ])
  },
  methods: {
    ...mapActions('todos', [
      'clearCompleted',
      'completeAll',
      'applyFilter',
      'setNewTodo',
      'clearNewTodo',
      'loadTodos',
      'toggleTodo',
      'deleteTodo'
    ])
  }
})

export default class TodoList extends Vue {
  public todos!: TodoConfig[]
  public filters!: object

  selectedFilter = 'all';
  created () {
    this.$store.dispatch('todos/loadTodos', db.collection('users').doc(this.$store.state.auth.user.uid).collection('todos'))
  }
  addTodoItem () {
    this.$store.dispatch('todos/addTodo')
    this.$store.dispatch('todos/clearNewTodo')
  }
  @Watch('$route', { immediate: true, deep: true })
  onUrlChange (to: any) {
    this.selectedFilter = to.params.filter
  }

  get filteredTodos () { return filters(this.selectedFilter)(this.todos) }
}
</script>

<style lang="scss">
@import "../styles/main.scss";

</style>
