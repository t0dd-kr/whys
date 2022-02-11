<script setup>
  import IndicatorDepth from '@/components/Indicator/Depth.vue';
  import Button from '@/components/Button.vue';
  
  import { useStore } from 'vuex'
  import { ref } from 'vue'
  import { push, set } from '@/firebase'

  const store = useStore()

  const props = defineProps({
    beforeAgenda: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['submit'])

  let title = ref('')
  let content = ref('')

  async function submit() {
    if(!title.value || !content.value) {
      return
    }

    let newReasonId = push('/agendas', {
      title: title.value,
      content: content.value,
      userId: store.state.user.id,
      parentId: props.beforeAgenda.id,
      rootId: props.beforeAgenda.rootId || props.beforeAgenda.id,
      ancestorIds: [...props.beforeAgenda.ancestorIds, props.beforeAgenda.id],
      depth: props.beforeAgenda.depth + 1,
      createdAt: new Date(),
    })

    set(`/agendas/${props.beforeAgenda.id}`, {
      ...props.beforeAgenda,
      childrenIds: [...props.beforeAgenda.childrenIds, newReasonId ],
      descendantIds: [...props.beforeAgenda.descendantIds, newReasonId ],
    })

    for(let ancestorId of props.beforeAgenda.ancestorIds) {
      let ancestor = store.state.agendas.find(e => e.id == ancestorId)
      set(`/agendas/${ancestorId}`, {
        ...ancestor,
        descendantIds: [...ancestor.descendantIds, newReasonId ],
      })
    }

    title.value = ''
    content.value = ''

    emit('submit')
  }
</script>

<template>
  <div class="flex flex-col bg-[#eee] bg-opacity-10 w-full sm:w-[600px] gap-2 sm:gap-4 p-4 rounded-lg">
    <IndicatorDepth :current="beforeAgenda.depth + 1"/>
    <input
      type="text"
      class="outline-none p-2 bg-[#eee] bg-opacity-10 text-white rounded-lg text-sm sm:text-2xl font-extrabold"
      placeholder="Summarize why it's happening."
      v-model="title"
    >
    <textarea
      class="outline-none p-2 bg-[#eee] bg-opacity-10 text-white rounded-lg text-sm sm:text-md"
      placeholder="Explain the reason."
      rows="5"
      v-model="content"
    />
    <Button :onClick="submit" :disabled="!title || !content">Submit</Button>
  </div>
</template>

<style scoped lang="scss">

</style>