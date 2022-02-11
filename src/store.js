import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: null,
      agendas: [],
      users: [],

      currentVotingAgenda: null,

      draftAgendas: [],

      agendaDataInitiated: false,
      userDataInitiated: false,
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }, 
    initDraftAgendas(state, payload) {
      let rootIds = state.agendas.filter(agenda => !agenda.rootId).map(e => e.id)
      state.draftAgendas = []

      for(let rootId of rootIds) {
        let agendas = [state.agendas.find(agenda => agenda.id == rootId), ...state.agendas.filter(agenda => agenda.rootId === rootId)].sort((a, b) => {
          return b.depth - a.depth
        })

        let interactedAgendas = agendas.filter(agenda => {
          return agenda.userId == state.user.id || agenda.likeUserIds.includes(state.user.id)
        })

        state.draftAgendas.push(interactedAgendas[0] || agendas[agendas.length - 1])
      }
    },
    setNextCurrentVotingAgenda(state, payload) {
      state.currentVotingAgenda = state.draftAgendas.splice(Math.floor(Math.random() * state.draftAgendas.length), 1)[0]
    }
  },
})