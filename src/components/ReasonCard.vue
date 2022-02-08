<script setup>
  import DepthIndicator from '@/components/DepthIndicator.vue';
  import LikeButton from '@/components/LikeButton.vue';
  import { ref } from 'vue'
  defineProps({
    agenda: {
      type: Object,
      required: true,
    }
  })

  let like = ref(false)
</script>

<template>
  <div class="flex bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-1 w-full items-end">
    <div class="flex flex-col flex-1">
      <div class="font-extrabold text-lg mb-1">
        {{ agenda.title }}
      </div>
      <div class="text-sm">
        {{ agenda.content }}
      </div>
    </div>
    <div class="flex justify-end items-end">
      <LikeButton :active="like" @click="like = !like"/>
      <!-- $store.state.user && agenda.likeUserIds.includes($store.state.user.id) -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>