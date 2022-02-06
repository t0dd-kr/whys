import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/index.css'
import store from '@/store'
import router from '@/router'
import { ref, onValue, set, push } from '@/firebase'

onValue(ref('/agendas/'), snapshot => {
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
      afterIds: agenda.afterIds || [],
      beforeId: agenda.beforeId || null,
      rootId: agenda.rootId || null,
      likeUserIds: agenda.likeUserIds || [],
    }
  })
  store.state.agendaDataInitiated = true
})

onValue(ref('/users/'), snapshot => {
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
