<script setup>
  import AgendaTile from '@/components/AgendaTile.vue'
  import Button from '@/components/Button.vue';
</script>

<template>
  <div class="flex flex-col p-8 pt-24">
    <div class="flex justify-between items-center mb-4 fixed top-0 left-0 w-full p-4 bg-opacity-10 bg-[#eee]">
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
        <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/')">Drafts</Button>
        <Button :onClick="() => $router.push('/new')">New</Button>
      </div>
    </div>
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