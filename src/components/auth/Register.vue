<template>
    <div class="container">
        <div class="auth-title">Register</div>
        <input
            type="text"
            placeholder="e-mail"
            v-model="email"
        required>
        <input
            type="password"
            placeholder="Password"
            v-model="password"
        required>
        <input
            type="password"
            placeholder="Confirm password"
            v-model="confirmPassword"
            v-on:keyup.enter="register"
        required>
        <div class="auth-footer">
        <button
            class="main"
            @click="register"
            :disabled="!isValid"
        >
        Sign Up
        </button>
        <router-link to="/login">Sign In</router-link>
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
    confirmPassword: string = ''

    register () {
      this.$store.dispatch('auth/register', { email: this.email, password: this.password })
    }

    get isValid (): boolean {
      if (this.password === '') { return false }
      return this.password === this.confirmPassword
    }
}

</script>
<style lang="scss">

</style>
