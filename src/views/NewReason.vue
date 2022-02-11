<script setup>
  import AgendaCard from '@/components/AgendaCard.vue';
  import NewAgenda from '@/components/NewAgenda.vue';

  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  
  const route = useRoute()
  const store = useStore()

  let agenda = computed(() => store.state.agendas.find(e => e.id === route.params.agendaId))
</script>

<template>
  <div class="flex flex-col items-center h-full justify-center fixed w-full gap-4 px-4" v-if="agenda">
    <AgendaCard :agenda="agenda"/>
    <NewAgenda :beforeAgenda="agenda" @submit="$router.push('/')"/>
  </div>
</template>

<style scoped lang="scss">

</style>