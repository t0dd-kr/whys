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
  <div class="flex gap-0.5 items-end">
    <div :class="[`border-2 w-[8px] rounded-sm transition-all`, {
      'border-white': current !== i,
      'active': current === i,
    }]"
    :style="{
      height: `${i * 2 + 6}px`,
    }" v-for="i in Math.max(total, current)"></div>
  </div>
</template>

<style scoped lang="scss">
  .active {
    background-color: var(--primary);
    border-color: var(--primary);
  }
</style>