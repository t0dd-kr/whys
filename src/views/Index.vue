<script setup>
  import AgendaTree from '@/components/AgendaTree.vue'
  import Button from '../components/Button.vue';
</script>

<template>
  <div class="flex p-8 justify-end">
    <Button :onClick="() => $router.push('/new')">New</Button>
  </div>
  <div class="flex justify-center items-center fixed top-0 left-0 w-full h-full pointer-events-none">
    <div class="pointer-events-auto flex flex-wrap gap-4 p-8">
      <AgendaTree :agenda="$store.state.currentVotingAgenda" v-if="$store.state.currentVotingAgenda"/>
      <div class="flex flex-col gap-4 justify-center items-center" v-else>
        <div class="text-white text-xl font-bold">No more agendas for vote !</div>
        <Button>View All</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>