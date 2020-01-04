<template>
    <div>
        <div
          id="checkbox"
          class = "todo__complete"
          @click="toggleTodo(todo)"
        >
        □
        </div>

        <div
          class = "todo__complete check"
          :class="{hidden: !todo.completed}"
          @click="toggleTodo(todo)"
        >
          ✔️
        </div>
        <div id="title"> {{ todo.title }} </div>
        <div
          class="todo__delete"
          id="deleteTodo"
          @click="deleteTodo(todo)"
        >
          X
        </div>

    </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'

export interface Todo {
    title: string
    completed: boolean
}
export default {
  props: ['todo'],
  methods: {
    ...mapActions('todos', [
      'deleteTodo',
      'toggleTodo'
    ])
  }
}
</script>
