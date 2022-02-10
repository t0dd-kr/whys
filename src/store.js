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
    }, 
    setNextCurrentVotingAgenda(state, payload) {
      let rootIds = state.agendas.filter(agenda => !agenda.rootId).map(e => e.id)
      let draftAgendas = []

      for(let rootId of rootIds) {
        let agendas = [state.agendas.find(agenda => agenda.id == rootId), ...state.agendas.filter(agenda => agenda.rootId === rootId)].sort((a, b) => {
          return b.depth - a.depth
        })

        let interactedAgendas = agendas.filter(agenda => {
          return agenda.userId == state.user.id || agenda.likeUserIds.includes(state.user.id)
        })

        draftAgendas.push(interactedAgendas[0])
      }

      state.currentVotingAgenda = draftAgendas.find((_, i) => {
        return Math.floor(Math.random() * draftAgendas.length) == i
      })
    }
  },
})