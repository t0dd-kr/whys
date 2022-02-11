<script setup>
  import AgendaTree from '@/components/AgendaTree.vue';
  import Header from '@/components/Header.vue';

  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  
  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  let agenda = computed(() => store.state.agendas.find(e => e.id === route.params.agendaId))
</script>

<template>
  <div class="flex flex-col p-4 pt-24">
    <Header/>
    <div class="flex flex-col items-center justify-center w-full" v-if="agenda">
      <AgendaTree :agenda="agenda"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>