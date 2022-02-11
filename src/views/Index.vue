<script setup>
  import DraftAgendaTree from '@/components/DraftAgendaTree.vue'
  import ReasonSelector from '@/components/ReasonSelector.vue'
  import Button from '@/components/Button.vue';
  import Header from '@/components/Header.vue';
  
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
  <div class="flex flex-col p-8 w-full box-border pt-24">
    <Header/>
    <div class="flex justify-center items-center pointer-events-none w-full sm:w-auto" v-if="$store.state.currentVotingAgenda">
      <div class="pointer-events-auto flex flex-wrap gap-4 w-full sm:w-auto">
        <div class="flex flex-col gap-4 w-full sm:w-auto">
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