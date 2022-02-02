<script setup>
import DepthIndicator from './DepthIndicator.vue';
import CardButtonSet from './CardButtonSet.vue';
  defineProps({
    agenda: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-2 w-[250px]">
    <div class="font-extrabold text-2xl mb-2">
      {{ agenda.title }}
    </div>
    <div class="text-sm">
      {{ agenda.content }}
    </div>
    <div class="font-bold text-right text-xs">
      {{ agenda.author }}
    </div>
    <div class="flex justify-between items-center">
      <DepthIndicator :current="agenda.depth"/>
      <CardButtonSet :agenda="agenda"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>