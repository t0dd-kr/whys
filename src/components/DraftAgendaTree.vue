<script setup>
  import { useStore } from 'vuex'
  import { ref, computed, watch } from 'vue'
  
  import AgendaCard from '@/components/AgendaCard.vue';

  const store = useStore()

  const props = defineProps({
    agenda: {
      type: Object,
      required: true,
    },
    withChildren: {
      type: Boolean,
      default: true,
    },
    withIndicator: {
      type: Boolean,
      default: true,
    },
  })

  let ancestors = computed(() => {
    if(!props.agenda.rootId) return []

    let _ancestors = []
    
    for(let depth = props.agenda.depth - 1; depth >= 1; depth--) {
      let ancestor = store.state.agendas.find(e => e.id == (_ancestors[_ancestors.length - 1] || props.agenda).parentId)
      _ancestors.push(ancestor)
    }
    
    return _ancestors.sort((a, b) => a.depth - b.depth)
  })

  let descendants = computed(() => {
    let rootId = props.agenda.rootId || props.agenda.id

    return store.state.agendas.filter(e => e.rootId === rootId && e.depth > props.agenda.depth).sort((a, b) => a.depth - b.depth)
  })

  let agendas = computed(() => {
    return [...ancestors.value, props.agenda, ...(props.withChildren ? descendants.value : [])]
  })

  let depths = computed(() => {
    return agendas.value.map(e => e.depth).filter((e, i, a) => a.indexOf(e) === i)
  })

</script>

<template>
  <div class="flex flex-col w-full h-auto justify-start items-start gap-4" v-if="agenda">
    <div class="overflow-auto w-full" v-for="depth in depths">
      <div class="flex gap-4">
        <AgendaCard 
          v-for="v in agendas.filter(a => a.depth == depth)" 
          :agenda="v" 
          :withIndicator="false"
          :withAuthor="false"
          :class="[(v.id == agenda.id ? 'border-primary border-2' : '')]"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>