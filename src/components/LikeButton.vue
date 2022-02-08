<script setup>
  defineProps({
    active: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div :class="['rounded-md p-3 bg-idle cursor-pointer', {
    'bg-active': active,
  }]">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        :class="['heart transition-all', { active }]" 
        d="M2.96712 9.27215L7.6022 13.6263C7.65404 13.675 7.67996 13.6994 7.70464 13.7174C7.8805 13.8462 8.11951 13.8462 8.29537 13.7174C8.32005 13.6994 8.34597 13.675 8.39781 13.6263L13.0329 9.27215C14.337 8.04707 14.4954 6.03107 13.3985 4.61738L13.1923 4.35157C11.8802 2.66039 9.24642 2.94401 8.32445 4.87577C8.19421 5.14864 7.80579 5.14864 7.67556 4.87577C6.75358 2.94401 4.11982 2.66039 2.8077 4.35157L2.60146 4.61738C1.50464 6.03107 1.66301 8.04707 2.96712 9.27215Z" 
        fill="transparent"
        stroke="#FF7979" 
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
  .bg-idle {
    @apply bg-white;
    @apply border-white;
    @apply transition-all;
    
    &:hover {
      & .heart {
        @apply fill-[#FF7979];
        fill-opacity: .25;
      }
    }
  }
  .bg-active {
    @apply bg-[#FF7979];
    @apply bg-opacity-25;
  }

  .heart {
    @apply transition-all;
    &.active {
      @apply fill-[#FF7979];
    }
  }
</style>