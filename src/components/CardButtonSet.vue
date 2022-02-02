<script setup>
  defineProps({
    agenda: {
      type: Object,
      required: true,
    }
  })
</script>

<template>
  <div class="flex gap-2">
    <div class="flex items-center justify-center gap-0.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="6" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(90 12 6)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
        <rect x="12" y="11.3333" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(90 12 11.3333)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
        <rect x="2" y="4.66667" width="2.66667" height="2.66667" rx="1.33333" transform="rotate(-90 2 4.66667)" fill="#FFD466" stroke="#FFD466" stroke-width="2"/>
        <path d="M3.33334 4V8.66667C3.33334 10.5523 3.33334 11.4951 3.91912 12.0809C4.50491 12.6667 5.44772 12.6667 7.33334 12.6667H9.33334" stroke="#FFD466" stroke-width="2"/>
        <path d="M3.33334 4.66667V4.66667C3.33334 5.28665 3.33334 5.59664 3.40148 5.85098C3.58642 6.54116 4.12551 7.08026 4.8157 7.26519C5.07003 7.33334 5.38002 7.33334 6 7.33334H9.33334" stroke="#FFD466" stroke-width="2"/>
      </svg>
      <div class="text-[16px] font-bold">{{ agenda.afterIds.length }}</div>
    </div>
    <div class="flex items-center justify-center gap-0.5 cursor-pointer like" @click="$emit('toggleLike')">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          :class="['heart', { active: $store.state.user && agenda.likeUserIds.includes($store.state.user.id)}]" 
          d="M2.96712 9.27215L7.6022 13.6263C7.65404 13.675 7.67996 13.6994 7.70464 13.7174C7.8805 13.8462 8.11951 13.8462 8.29537 13.7174C8.32005 13.6994 8.34597 13.675 8.39781 13.6263L13.0329 9.27215C14.337 8.04707 14.4954 6.03107 13.3985 4.61738L13.1923 4.35157C11.8802 2.66039 9.24642 2.94401 8.32445 4.87577C8.19421 5.14864 7.80579 5.14864 7.67556 4.87577C6.75358 2.94401 4.11982 2.66039 2.8077 4.35157L2.60146 4.61738C1.50464 6.03107 1.66301 8.04707 2.96712 9.27215Z" 
          stroke="#FF7979" 
          stroke-width="2"
        />
      </svg>
      <div class="text-[16px] font-bold">{{ agenda.likeUserIds.length }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .heart {
    transition: all .25s;
    fill: #FF7979;
    fill-opacity: 0;
    &.active {
      fill-opacity: 1;
    }
  }
  .like {
    &:hover {
    .heart {
      fill-opacity: .5;
    }
  }
}  
</style>