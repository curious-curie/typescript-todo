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
import { TodoConfig } from '@/store/modules/todos/types'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: ['todo']
})

export default class Todo extends Vue {
  deleteTodo (todo: TodoConfig) {
    this.$emit('deleteTodo', todo)
  }
  toggleTodo (todo: TodoConfig) {
    this.$emit('toggleTodo', todo)
  }
}

</script>
