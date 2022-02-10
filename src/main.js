import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/index.css'
import store from '@/store'
import router from '@/router'
import { onValue, set, push } from '@/firebase'

onValue('/agendas', snapshot => {
  store.state.agendas = Object.keys(snapshot.val() || [])
  .map(key => {
    return {
      id: key,
      ...snapshot.val()[key],
    }
  })
  .sort((a, b) =>  new Date(a.createAt).getTime() - new Date(b.createAt).getTime())
  .map(agenda => {
    return {
      ...agenda,
      childrenIds: agenda.childrenIds || [],
      parentId: agenda.parentId || null,
      rootId: agenda.rootId || null,
      likeUserIds: agenda.likeUserIds || [],
      ancestorIds: agenda.ancestorIds || [],
      descendantIds: agenda.descendantIds || [],
    }
  })
  store.state.agendaDataInitiated = true
  store.commit('initDraftAgendas')
  store.commit('setNextCurrentVotingAgenda')
})

onValue('/users', snapshot => {
  store.state.users = Object.keys(snapshot.val() || []).map(key => {
    return {
      ...snapshot.val()[key],
      id: key,
    }
  })
  store.state.userDataInitiated = true
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
