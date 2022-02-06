<script setup>
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  })
</script>

<template>
  <div 
    :class="['flex justify-center items-center rounded-md text-white px-4 py-2 font-bold cursor-pointer transition-all select-none', {
      'bg-primary': !disabled,
      'bg-gray-400': disabled,
    }]"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>