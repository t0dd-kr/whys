<script setup>
  import LikeButton from '@/components/LikeButton.vue';
  import { onValue, set, push } from '@/firebase'
  import { useStore } from 'vuex'

  const store = useStore()

  const props = defineProps({
    agenda: {
      type: Object,
      required: true,
    }
  })

  let emit = defineEmits(['like'])

  function toggleLike() {
    if(props.agenda.likeUserIds.includes(store.state.user.id)) {
      set('/agendas/' + props.agenda.id, {
        ...props.agenda,
        likeUserIds: props.agenda.likeUserIds.filter(e => e !== store.state.user.id)
      })
      emit('like', false, props.agenda)
    } else {
        set('/agendas/' + props.agenda.id, {
        ...props.agenda,
        likeUserIds: [ ...props.agenda.likeUserIds, store.state.user.id ].filter((e, i, a) => a.indexOf(e) === i)
      })
      emit('like', true, props.agenda)
    }
  }
</script>

<template>
  <div class="flex bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-1 w-full items-end">
    <div class="flex flex-col flex-1">
      <div class="font-extrabold text-lg mb-1">
        {{ agenda.title }}
      </div>
      <div class="text-sm" v-html="agenda.content.replaceAll('\n', '<br>')"></div>
    </div>
    <div class="flex justify-end items-end">
      <LikeButton :active="agenda.likeUserIds.includes($store.state.user.id)" @click="toggleLike"/>
      <!-- $store.state.user && agenda.likeUserIds.includes($store.state.user.id) -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>