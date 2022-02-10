<script setup>
  import IndicatorDepth from '@/components/Indicator/Depth.vue';
  import IndicatorBranch from '@/components/Indicator/Branch.vue';
  import IndicatorLike from '@/components/Indicator/Like.vue';
  defineProps({
    agenda: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-2 w-[600px]">
    <IndicatorDepth :current="agenda.depth"/>
    <div class="font-extrabold text-2xl mb-2">
      {{ agenda.title }}
    </div>
    <div class="text-sm">
      {{ agenda.content }}
    </div>
    <div class="font-bold text-right text-xs">
      {{ agenda.author }}
    </div>
    <div class="flex justify-end gap-2">
      <IndicatorBranch :value="$store.state.agendas.filter(a => a.rootId == agenda.id).length"/>
      <IndicatorLike :value="$store.state.agendas.filter(a => a.rootId == agenda.id).map(a => a.likeUserIds.length).reduce((a, b) => a + b, 0)" :active="$store.state.user && agenda.likeUserIds.includes($store.state.user.id)"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>