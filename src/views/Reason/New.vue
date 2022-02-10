<script setup>
  import IndicatorDepth from '@/components/Indicator/Depth.vue';
  import Button from '@/components/Button.vue';
  import AgendaCard from '@/components/AgendaCard.vue';

  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { push, set } from '@/firebase'
import NewAgenda from '../../components/NewAgenda.vue';
  
  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  let agenda = computed(() => store.state.agendas.find(e => e.id === route.params.agendaId))
</script>

<template>
  <div class="flex flex-col items-center h-full justify-center fixed w-full gap-4" v-if="agenda">
    <AgendaCard :agenda="agenda"/>
    <NewAgenda :beforeAgenda="agenda" @submit="$router.push('/')"/>
  </div>
</template>

<style scoped lang="scss">

</style>