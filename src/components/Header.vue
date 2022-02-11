<script setup>
  import Button from '@/components/Button.vue'
</script>

<template>
  <div class="flex justify-between items-end mb-4 fixed top-0 left-0 w-full p-4 bg-opacity-10 bg-[#eee] z-10 flex-col sm:flex-row">
    <div class="gap-2 hidden sm:flex">
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
      <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/')" v-if="$route.path != '/'">Drafts</Button>
      <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$router.push('/all')" v-if="$route.path != '/all'">View All</Button>
      <Button :onClick="() => $router.push('/new')">New</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>