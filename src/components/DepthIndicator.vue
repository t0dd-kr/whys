<script setup>
  defineProps({
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 5,
    }
  })
</script>

<template>
  <div class="flex gap-2">
    <div :class="[`border-2 w-[10px] h-[10px] rounded-full transition-all`, {
      'border-white': current !== i,
      'active': current === i,
    }]" v-for="i in total"></div>
  </div>
</template>

<style scoped lang="scss">
  .active {
    background-color: var(--primary);
    border-color: var(--primary);
  }
</style>