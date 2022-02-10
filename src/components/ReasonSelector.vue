<script setup>
  import Button from '@/components/Button.vue'
  import ReasonCard from '@/components/ReasonCard.vue'

  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  const props = defineProps({
    agenda: {
      type: Object,
      required: true
    },
  })

  const emit = defineEmits(['select'])

  let children = computed(() => {
    return props.agenda.childrenIds.map(e => {
      return store.state.agendas.find(a => a.id === e)
    })
  })
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 text-white rounded-lg p-4 gap-4 w-[600px]">
    <ReasonCard :agenda="child" v-for="child in children" @like="$emit('select', child)"/>
    <div class="flex justify-between items-center">
      <div class="font-extrabold text-lg" v-if="children.length > 0">
        Write another reason for this agenda.
      </div>
      <div class="font-extrabold text-lg" v-else>
        Write a reason for this agenda.
      </div>
      <div class="flex gap-2 mt-4">
        <Button @click="$router.push('/reason/new/' + agenda.id)">Because</Button>
        <Button class="bg-[#eee] bg-opacity-10 text-white" @click="$emit('select', child)">Skip</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>