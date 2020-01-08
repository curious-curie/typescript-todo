import db from '@/main'
import { State } from './types'
import { Commit } from 'vuex'
import * as firebase from 'firebase'

export default {
  register: (context: { commit: Commit, state: State }, payload: any) => {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        res => {
          console.log(res)
          context.commit('SET_USER', res.user)
        }
      )
  },
  login (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        res => {
          console.log(res)
          context.commit('SET_USER', res.user)
        }
      )
      .catch((error) => {
        alert(error.message)
        console.log(error)
      })
  },
  logout (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signOut()
    context.commit('SET_USER', null)
  }
}
