<script setup>
  import IndicatorDepth from '@/components/Indicator/Depth.vue';
  import Button from '@/components/Button.vue';
  import Header from '@/components/Header.vue';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { onValue, push } from '@/firebase'
  
  const router = useRouter()
  const store = useStore()

  let title = ref('')
  let content = ref('')

  async function submit() {
    if(!title.value || !content.value) {
      return
    }

    push('/agendas', {
      title: title.value,
      content: content.value,
      userId: store.state.user.id || 1,
      depth: 1,
      createdAt: new Date(),
    })

    router.push('/')
  }
</script>

<template>
  <div class="flex flex-col items-center h-full justify-center fixed w-full px-4">
    <div class="flex justify-center text-white text-3xl mb-16 font-extrabold w-full text-center">
      What's going on? What's happening?
    </div>
    <div class="flex flex-col bg-[#eee] bg-opacity-10 sm:w-[600px] gap-2 sm:gap-4 p-4 rounded-lg w-full">
      <IndicatorDepth :current="1"/>
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
  </div>
</template>

<style scoped lang="scss">

</style>