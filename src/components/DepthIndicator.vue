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
  <div class="flex gap-1 items-end">
    <div :class="[`border-2 w-[8px] rounded transition-all`, {
      'border-white': current !== i,
      'active': current === i,
    }]"
    :style="{
      height: `${(total - i) * 4 + 8}px`,
    }" v-for="i in total"></div>
  </div>
</template>

<style scoped lang="scss">
  .active {
    background-color: var(--primary);
    border-color: var(--primary);
  }
</style>