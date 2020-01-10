<template>
  <div class="home">
    <div v-if="isAuthenticated">
    <div>welcome {{ userEmail }}
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
import * as firebase from 'firebase/app'

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
  }
})
export default class Home extends Vue {
  get userEmail () {
    return firebase.auth().currentUser.email
  }
  get isAuthenticated () {
    if (this.$store.state.auth.user === undefined || this.$store.state.auth.user === null) {
      // if (localStorage.getItem('user') !== null) {
      //   const userInfo = JSON.parse(localStorage.getItem('user'))
      //   console.log(userInfo)
      //   this.$store.dispatch('auth/login', userInfo)
      //   return true
      // }
      if (this.$router.path !== '/login') { this.$router.push('login') }
      return false
    }
    return true
  }
  logout () {
    this.$store.dispatch('auth/logout')
    // localStorage.setItem('user', null)
  }
}
</script>
<style lang="scss">
@import "../styles/main.scss";

</style>
