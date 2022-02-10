<script setup>
  import AgendaCard from '@/components/AgendaCard.vue';
  import AgendaTree from '../components/AgendaTree.vue';
  import Button from '@/components/Button.vue';

  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  
  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  let agenda = computed(() => store.state.agendas.find(e => e.id === route.params.agendaId))
</script>

<template>
  <div class="flex flex-col p-8 pt-24">
    <div class="flex justify-end items-center mb-4 fixed top-0 left-0 w-full p-4 bg-opacity-10 bg-[#eee]">
      <div class="flex gap-2">
        <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/all')">View All</Button>
        <Button :onClick="() => $router.push('/new')">New</Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full" v-if="agenda">
      <AgendaTree :agenda="agenda"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>