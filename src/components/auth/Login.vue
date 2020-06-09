<template>
    <div class="container">
        <div class="auth-title">Login</div>
        <input
            type="text"
            placeholder="e-mail"
            v-model="email"
        required>
        <input
            type="password"
            placeholder="Password"
            v-model="password"
            v-on:keyup.enter="login"
        required>

    <div class="auth-footer">
            <button class="main"
                @click="login"
                :disabled="!isValid"
            >
            Sign In
            </button>
            <button><router-link to="/register">Sign Up</router-link></button>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions } from 'vuex'

@Component({
})

export default class Register extends Vue {
    email: string = ''
    password: string = ''

    login () {
      const userInfo = { email: this.email, password: this.password }
      this.$store.dispatch('auth/login', userInfo)
    }

    get isValid (): boolean {
      return true
    }
}

</script>
<style lang="scss">

</style>
