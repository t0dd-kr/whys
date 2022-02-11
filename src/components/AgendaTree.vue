<script setup>
  import { useStore } from 'vuex'
  import { ref, computed, watch } from 'vue'
  
  import AgendaCard from '@/components/AgendaCard.vue';
  import NewAgenda from '@/components/NewAgenda.vue';

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
    return store.state.agendas.filter(e => e.descendantIds.includes(props.agenda.id))
  })

  let descendants = computed(() => {
    return store.state.agendas.filter(e => e.ancestorIds.includes(props.agenda.id))
  })

  let agendas = computed(() => {
    return [...ancestors.value, props.agenda, ...(props.withChildren ? descendants.value : [])]
  })

  let depths = computed(() => {
    let _depths = agendas.value.map(e => e.depth).filter((e, i, a) => a.indexOf(e) === i)

    if(props.agenda.depth == _depths.length) {
      return [..._depths, props.agenda.depth + 1]
    } else {
      return _depths
    }
  })

</script>

<template>
  <div class="flex flex-col w-full h-auto justify-start items-start" v-if="agenda">
    <div :class="['p-4 overflow-auto w-full', {
      'border-t-2': depth > 1
    }]" v-for="depth in depths">
      <div class="hidden sm:flex gap-4" :style="`width: calc(${(agendas.filter(a => a.depth == depth).length + (agenda.depth == depth - 1 ? 1 : 0)) * 360}px + ${(agendas.filter(a => a.depth == depth).length + (agenda.depth == depth - 1 ? 1 : 0)) - 1}rem)`">
        <AgendaCard 
          v-for="v in agendas.filter(a => a.depth == depth)" 
          :agenda="v" 
          :withIndicator="withIndicator"
          :class="['w-[360px] cursor-pointer transition-all border-2', (v.id == agenda.id ? 'border-primary' : 'border-transparent')]"
          @click.prevent="$router.push('/agenda/' + v.id)"
        />
        <NewAgenda :beforeAgenda="agenda" v-if="agenda.depth == depth - 1" class="w-[360px]"/>
      </div>
      <div class="flex sm:hidden gap-4" :style="`width: calc(${(agendas.filter(a => a.depth == depth).length + (agenda.depth == depth - 1 ? 1 : 0)) * 100}% + ${(agendas.filter(a => a.depth == depth).length + (agenda.depth == depth - 1 ? 1 : 0)) - 1}rem)`">
        <AgendaCard 
          v-for="v in agendas.filter(a => a.depth == depth)" 
          :agenda="v" 
          :withIndicator="withIndicator"
          :class="['w-full cursor-pointer transition-all border-2', (v.id == agenda.id ? 'border-primary' : 'border-transparent')]"
          @click.prevent="$router.push('/agenda/' + v.id)"
        />
        <NewAgenda :beforeAgenda="agenda" v-if="agenda.depth == depth - 1" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>