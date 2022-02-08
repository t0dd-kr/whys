<script setup>
  import Button from '@/components/Button.vue';
  import { ref } from 'vue'

  defineProps({
    agendaId: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="flex bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-1 w-full items-end justify-between">
    <div class="font-extrabold text-lg mb-1">
      Write another reason for this agenda.
    </div>
    <Button @click="$router.push('/reason/new/' + agendaId)">New</Button>
  </div>
</template>

<style lang="scss" scoped>
</style>