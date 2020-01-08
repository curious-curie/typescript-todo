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
        }
      )
  },
  login (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        res => {
          console.log(res)
        }
      )
      .catch((error) => {
        alert('try again')
        console.log(error)
      })
  },
  logout (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signOut()
  }
}
