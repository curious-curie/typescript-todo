<template>
    <div>
        <h1>Login</h1>
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
        <button
            @click="login"
            :disabled="!isValid"
        >
        Sign In
        </button>
        <router-link to="/register">Sign Up</router-link>
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
      this.$store.dispatch('auth/login', { email: this.email, password: this.password })
    }

    get isValid (): boolean {
      return true
    }
}

</script>
<style lang="scss">

</style>
