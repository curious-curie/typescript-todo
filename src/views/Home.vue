<template>
  <div class="home">
    <div v-if="isAuthenticated">
    <div>welcome {{ user.email }}
      <button @click="logout">Logout</button>
    </div>
     <todo-list/>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import TodoList from '@/components/TodoList.vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'

@Component({
  components: {
    Login,
    Register,
    TodoList
  },
  computed: {
    ...mapState('auth', [
      'user'
    ])
  },
  methods: {
    ...mapActions('auth',
      ['logout'])
  }
})
export default class Home extends Vue {
  get isAuthenticated () {
    if (this.$store.state.auth.user === undefined || this.$store.state.auth.user === null) {
      if (this.$router.path !== '/login') { this.$router.push('login') }
      return false
    }
    return true
  }
}
</script>
<style lang="scss">
@import "../styles/main.scss";

</style>
