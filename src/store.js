import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: null,
      agendas: [],
      users: [],

      currentVotingAgenda: null,

      agendaDataInitiated: false,
      userDataInitiated: false,
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
})