<script setup>
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <div 
    :class="['flex justify-center items-center rounded-md text-white px-4 py-2 font-bold cursor-pointer transition-all select-none', {
      'bg-primary': !disabled,
      'bg-gray-400': disabled,
    }]"
    @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>