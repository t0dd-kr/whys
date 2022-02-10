<script setup>
  import DepthIndicator from '@/components/DepthIndicator.vue';
  import CardButtonSet from './AgendaIndicator.vue';
  import ReasonCard from '@/components/ReasonCard.vue';
  import Button from '@/components/Button.vue';

  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()

  const props = defineProps({
    agenda: {
      type: Object,
      required: true,
    },
    showChildren: {
      type: Boolean,
      default: false,
    },
    showGrandChildren: {
      type: Boolean,
      default: false,
    },
  })

  let children = computed(() => {
    return props.agenda.afterIds.map(e => {
      return store.state.agendas.find(a => a.id === e)
    })
  })

  function selectReason(reason) {
    store.commit('setNextCurrentVotingAgenda')
  }
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-2 w-[800px]">
    <DepthIndicator :current="agenda.depth"/>
    <div class="font-extrabold text-2xl">
      {{ agenda.title }}
    </div>
    <div class="text-sm">
      {{ agenda.content }}
    </div>
    <div class="font-bold text-right text-xs">
      {{ agenda.author }}
    </div>
    <div class="flex flex-col gap-4">
      <ReasonCard :agenda="child" v-for="child in children" @like="selectReason"/>
      <div class="flex justify-between items-center">
        <div class="font-extrabold text-lg" v-if="children.length > 0">
          Write another reason for this agenda.
        </div>
        <div class="font-extrabold text-lg" v-else>
          Write a reason for this agenda.
        </div>
        <Button @click="$router.push('/reason/new/' + agenda.id)">Because</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>