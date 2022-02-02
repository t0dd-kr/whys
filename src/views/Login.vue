<script setup>
  import Button from '../components/Button.vue';
  import { ref } from 'vue'

  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const store = useStore()
  const router = useRouter()

  let nickname = ref('')

  function login() {
    if(nickname.value.length > 0) {
      localStorage.user = JSON.stringify({
        nickname: nickname.value,
      })

      store.commit('setUser', {
        nickname: nickname.value,
      })

      router.push('/')
    }
  }
</script>

<template>
  <div class="flex flex-col items-center p-8 h-full justify-center fixed w-full">
    <div class="flex flex-col w-[360px] gap-2">
      <input
        type="text"
        class="outline-none p-4 bg-[#eee] bg-opacity-10 text-white rounded-lg text-2xl"
        placeholder="Nickname"
        v-model="nickname"
      >
      <Button class="text-xl" :disabled="nickname.length == 0" @click="login">Login</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>