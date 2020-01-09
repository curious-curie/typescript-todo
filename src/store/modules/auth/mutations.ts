import * as types from './mutation-types'
import { AuthState } from './types'

export default {
  [types.SET_USER] (state: AuthState, newUser: any) {
    state.user = newUser
  },
  [types.REGISTER] (state: AuthState, newUser: any) {
    state.user = newUser
  },
  [types.LOGIN] (state: AuthState, loggedInUser: any) {
    state.user = loggedInUser
  },
  [types.LOGOUT] (state: AuthState, loggedOutUser: null) {
    state.user = loggedOutUser
  },
  [types.SET_USER_FROM_LOCAL] (state: AuthState, userfromLocal: any) {
    state.user = userfromLocal
  }
}
