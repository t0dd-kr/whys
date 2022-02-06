<script setup>
  import Button from '../components/Button.vue';
  import { ref } from 'vue'
  import { onValue, push } from '@/firebase'

  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const store = useStore()
  const router = useRouter()

  let nickname = ref('')

  function login() {
    if(nickname.value.length > 0) {
      let existUser = store.state.users.find(user => user.nickname === nickname.value)
      let user = null

      if(existUser) {
        user = existUser
      } else {
        let newKey = push('/users', {
          nickname: nickname.value,
          createdAt: new Date(),
        })
        
        user = store.state.users.find(user => user.id === newKey)
      }

      localStorage.user = JSON.stringify(user, null, 2)
      router.push('/')
    }
  }
</script>

<template>
  <div class="flex flex-col items-center p-8 h-full justify-center fixed w-full">
    <div class="flex flex-col w-[360px] gap-4">
      <input
        type="text"
        class="outline-none p-4 bg-[#eee] bg-opacity-10 text-white rounded-lg text-2xl"
        placeholder="Nickname"
        v-model="nickname"
      >
      <Button class="text-xl" :disabled="nickname.length == 0" :onClick="login">Login</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>