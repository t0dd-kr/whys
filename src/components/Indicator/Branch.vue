<script setup>
  const props = defineProps({
    value: {
      type: Number,
      default: 0,
    }
  })
</script>

<template>
  <div class="flex items-center justify-center gap-0.5" v-if="value > 1">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="6" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(90 12 6)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
      <rect x="12" y="11.3333" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(90 12 11.3333)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
      <rect x="2" y="4.66667" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(-90 2 4.66667)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
      <path d="M3.33334 4V8.66667C3.33334 10.5523 3.33334 11.4951 3.91912 12.0809C4.50491 12.6667 5.44772 12.6667 7.33334 12.6667H9.33334" stroke="#FFD466" stroke-width="2"/>
      <path d="M3.33334 4.66667V4.66667C3.33334 5.28665 3.33334 5.59664 3.40148 5.85098C3.58642 6.54116 4.12551 7.08026 4.8157 7.26519C5.07003 7.33334 5.38002 7.33334 6 7.33334H9.33334" stroke="#FFD466" stroke-width="2"/>
    </svg>
    <div class="text-[16px] font-bold">{{ value }}</div>
  </div>
</template>

<style scoped lang="scss">

</style>