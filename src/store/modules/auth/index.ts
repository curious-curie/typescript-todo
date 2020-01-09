import actions from './actions'
import mutations from './mutations'
import { AuthState } from './types'

const initState: AuthState = {
  user: null
}

export default {
  namespaced: true,
  namespace: 'authModule',
  state: initState,
  actions,
  mutations
}
