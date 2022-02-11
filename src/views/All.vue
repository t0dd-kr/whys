<script setup>
  import AgendaTile from '@/components/AgendaTile.vue'
</script>

<template>
  <div class="flex flex-col p-8 pt-24">
    <div class="flex flex-wrap gap-4">
      <AgendaTile
        class="hover:-translate-y-2 hover:shadow-black shadow-md transition-all cursor-pointer"
        :agenda="agenda" 
        v-for="agenda in $store.state.agendas.filter(e => !e.rootId)"
        @click="$router.push('/agenda/' + agenda.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>