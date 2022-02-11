<script setup>
  import IndicatorDepth from '@/components/Indicator/Depth.vue';
  import IndicatorBranch from '@/components/Indicator/Branch.vue';
  import IndicatorLike from '@/components/Indicator/Like.vue';
  import { useStore } from 'vuex'
  import { set } from '@/firebase'

  const store = useStore()
  
  const props = defineProps({
    agenda: {
      type: Object,
      required: true,
    },
    withIndicator: {
      type: Boolean,
      default: true,
    }
  })

  function likeAgenda() {
    if(props.agenda.likeUserIds.includes(store.state.user.id)) {
      set(`/agendas/${props.agenda.id}`, {
        ...props.agenda,
        likeUserIds: props.agenda.likeUserIds.filter(e => e != store.state.user.id),
      })
    } else {
      set(`/agendas/${props.agenda.id}`, {
        ...props.agenda,
        likeUserIds: [...props.agenda.likeUserIds, store.state.user.id],
      })
    }
  }
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-2 w-full sm:w-[360px] h-[210px]">
    <div class="text-xs font-extrabold text-[#aaa]" v-if="agenda.depth > 1">Why?</div>
    <div class="font-extrabold text-2xl mb-2 text-ellipsis h-[64px] break-words overflow-hidden line-clamp-2">
      {{ agenda.title }}
    </div>
    <div class="text-sm text-ellipsis h-[60px] break-words overflow-hidden line-clamp-3" v-html="agenda.content.replaceAll('\n', '<br>')"></div>
    <div class="font-bold text-right text-xs">
      {{ agenda.author }}
    </div>
    <div class="flex justify-between" v-if="withIndicator">
      <IndicatorDepth :current="agenda.depth" :isMaximum="agenda.depth == 1" :max="Math.max(...$store.state.agendas.filter(e => e.rootId == agenda.id).map(e => e.depth), 1)"/>
      <div class="flex justify-end gap-2" v-if="agenda.depth == 1">
        <IndicatorBranch :value="$store.state.agendas.filter(a => a.rootId == agenda.id).map(e => e.childrenIds.length > 1 ? e.childrenIds.length : 0).reduce((a, b) => a + b, 0)"/>
        <IndicatorLike :value="$store.state.agendas.filter(a => a.rootId == agenda.id).map(a => a.likeUserIds.length).reduce((a, b) => a + b, 0)" :active="true"/>
      </div>
      <div class="flex justify-end gap-2" v-else>
        <IndicatorBranch :value="agenda.childrenIds.length"/>
        <IndicatorLike @click.stop="likeAgenda" :value="agenda.likeUserIds.length" :active="$store.state.user && agenda.likeUserIds.includes($store.state.user.id)"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .text-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
</style>