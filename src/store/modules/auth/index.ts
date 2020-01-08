import actions from './actions'
// import mutations from './mutations'
import { State } from './types'

const initState: State = {
  user: null
}

export default {
  namespaced: true,
  namespace: 'authModule',
  state: initState,
  actions
}
