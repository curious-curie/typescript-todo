import * as types from './mutation-types'
import { State } from './types'

export default {
  [types.SET_USER] (state: State, newUser: any) {
    state.user = newUser
  },
  [types.REGISTER] (state: State, newUser: any) {
    state.user = newUser
  },
  [types.LOGIN] (state: State, loggedInUser: any) {
    state.user = loggedInUser
  },
  [types.LOGOUT] (state: State, loggedOutUser: null) {
    state.user = loggedOutUser
  }
}
