<script setup>
  import AgendaCard from '@/components/Card.vue'
  import Button from '../components/Button.vue';

  import { ref, onValue, set, push } from '@/firebase'

  // push('/agendas', {
  //   title: 'We are in Trouble.',
  //   content: 'Something is wrong. We need to get out of here. We need to get out of here.',
  //   userId: 1,
  //   depth: 1,
  //   likeUserIds: [],
  //   afterIds: [],
  //   beforeId: null,
  //   rootId: null,
  //   createdAt: new Date(),
  // })
</script>

<template>
  <div class="flex p-8 justify-end">
    <Button>New</Button>
  </div>
  <div class="p-8 flex flex-wrap gap-4 justify-center justify-items-start">
    <AgendaCard :agenda="agenda"
      v-for="agenda in $store.state.agendas"
    />
  </div>
</template>

<style scoped lang="scss">

</style>