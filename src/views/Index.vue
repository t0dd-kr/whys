<script setup>
  import DraftAgendaTree from '@/components/DraftAgendaTree.vue'
  import ReasonSelector from '@/components/ReasonSelector.vue'
  import Button from '@/components/Button.vue';
  
  import { watch, nextTick } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const store = useStore()

  function next () {
    console.log('next')
    store.commit('setNextCurrentVotingAgenda')
  }

  watch(() => store.state.currentVotingAgenda, () => {
    nextTick(() => {
      window.scrollTo(0, window.innerHeight)
    })
  })
</script>

<template>
  <div class="flex flex-col p-8 w-full box-border">
    <div class="flex justify-between items-center mb-4 fixed top-0 left-0 w-full p-4 bg-opacity-10 bg-[#eee] z-10">
      <div class="flex gap-2">
        <div class="text-white text-sm font-extrabold bg-[#eee] bg-opacity-20 rounded p-2">
          {{ $store.state.agendas.filter(e => !e.rootId ).length }} Agendas
        </div>
        <div class="text-white text-sm font-extrabold bg-[#eee] bg-opacity-20 rounded p-2">
          {{ $store.state.agendas.filter(e => e.rootId ).length }} Reasons
        </div>
        <div class="text-white text-sm font-extrabold bg-[#ff5050] rounded p-2">
          {{ $store.state.agendas.map(e => e.likeUserIds.length).reduce((a, b) => a + b, 0) }} Agrees
        </div>
        <div class="text-white text-sm font-extrabold bg-[#ffb400] rounded p-2">
          {{ $store.state.agendas.map(e => e.childrenIds.length > 1 ? e.childrenIds.length : 0).reduce((a, b) => a + b, 0) }} Disagrees
        </div>
      </div>
      <div class="flex gap-2">
        <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/all')">View All</Button>
        <Button :onClick="() => $router.push('/new')">New</Button>
      </div>
    </div>
    <div class="flex justify-center items-center pointer-events-none" v-if="$store.state.currentVotingAgenda">
      <div class="pointer-events-auto flex flex-wrap gap-4 p-8">
        <div class="flex flex-col gap-4">
          <DraftAgendaTree :agenda="$store.state.currentVotingAgenda" :withChildren="false" :withIndicator="false"/>
          <ReasonSelector :agenda="$store.state.currentVotingAgenda" @select="next"/>
        </div>
      </div>
    </div>
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center" v-else>
      <div class="flex flex-col gap-4 justify-center items-center">
        <div class="text-white text-xl font-bold">No more agendas for vote !</div>
        <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/all')">View All</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>