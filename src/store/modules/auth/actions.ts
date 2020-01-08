import { State } from './types'
import { Commit } from 'vuex'
import * as firebase from 'firebase/app'
import db from '@/main'

export default {
  register: (context: { commit: Commit, state: State }, payload: any) => {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        res => {
          context.commit('SET_USER', res.user)
          if (res.user !== null) {
            const newUser = {
              'uid': res.user.uid,
              'email': res.user.email
            }
            db.collection('users').doc(res.user.uid)
              .set(newUser)
          }
        }
      )
      .catch((error) => {
        alert(error.message)
      })
  },
  login (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        res => {
          context.commit('SET_USER', res.user)
        }
      )
      .catch((error) => {
        alert(error.message)
      })
  },
  logout (context: { commit: Commit, state: State }, payload: any) {
    firebase.auth().signOut()
    context.commit('SET_USER', null)
  }
}
