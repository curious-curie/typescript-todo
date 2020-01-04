<template>
  <div class="home">
    <todo-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import TodoList from '@/components/TodoList.vue'
import Component from 'vue-class-component'

@Component({
  components: {
    TodoList
  }
})
export default class Home extends Vue {}
</script>
