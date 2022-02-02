import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: null,
      agendas: [],
      users: [],
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
})