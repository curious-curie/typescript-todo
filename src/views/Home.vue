<template>
  <div class="home">
    <login/>
    <register/>
    <todo-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Component from 'vue-class-component'

@Component({
  components: {
    Login,
    Register,
    TodoList
  }
})
export default class Home extends Vue {}
</script>
