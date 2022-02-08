<script setup>
  import DepthIndicator from '@/components/DepthIndicator.vue';
  import Button from '@/components/Button.vue';
  import AgendaCard from '@/components/AgendaCard.vue';

  import { computed, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { push, set } from '@/firebase'
  
  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  let title = ref('')
  let content = ref('')

  let agenda = computed(() => store.state.agendas.find(e => e.id === route.params.agendaId))

  async function submit() {
    if(!title.value || !content.value) {
      return
    }

    let newReasonId = push('/agendas', {
      title: title.value,
      content: content.value,
      userId: store.state.user.id,
      beforeId: agenda.value.id,
      rootId: agenda.value.rootId || agenda.value.id,
      depth: agenda.value.depth + 1,
      createdAt: new Date(),
    })

    set(`/agendas/${agenda.value.id}`, {
      ...agenda.value,
      afterIds: [...agenda.value.afterIds, newReasonId ],
    })

    router.push('/')
  }
</script>

<template>
  <div class="flex flex-col items-center h-full justify-center fixed w-full" v-if="agenda">
    <AgendaCard :agenda="agenda"/>
    <div class="flex flex-col bg-[#eee] bg-opacity-10 w-[480px] gap-4 p-4 rounded-lg mt-4">
      <DepthIndicator :current="agenda.depth + 1"/>
      <input
        type="text"
        class="outline-none p-2 bg-[#eee] bg-opacity-10 text-white rounded-lg text-2xl font-extrabold"
        placeholder="Summarize why it's happening."
        v-model="title"
      >
      <textarea
        class="outline-none p-2 bg-[#eee] bg-opacity-10 text-white rounded-lg"
        placeholder="Explain the reason."
        rows="5"
        v-model="content"
      />
      <Button :onClick="submit" :disabled="!title || !content">Submit</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>