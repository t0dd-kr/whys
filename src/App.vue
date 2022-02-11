<script setup>
  import Header from '@/components/Header.vue';
</script>

<template>
  <div class="z-0">
    <router-view/>
  </div>
  <Header/>
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap");

  * {
    font-family: 'Nanum Gothic', sans-serif;
    line-height: 1.4;
  }

  :root {
    --primary: #75d965;
    --like: #ff7979;
    --branch: #ffd466;
  }

  html, body {
    background-color: #303033;
  }

  ::-webkit-scrollbar {
    width: 16px;
    &-thumb {
      background-color: #aaa;
      border: 4px solid #434346;
      border-radius: 100px;
    }
    &-track {
      padding: 0 4px;
      margin: 0 4px;
      background-color: #434346;
    }
    &-button {
      display: none;
    }
  }

  .bg-primary {
    background-color: rgb(117 217 101 / var(--tw-bg-opacity));
    --tw-bg-opacity: 1;
  }
  
  .border-primary {
    border-color: var(--primary);
  }

  .text-primary {
    color: var(--primary) !important;
  }

  .bg-branch {
    background-color: rgb(255 212 102 / var(--tw-bg-opacity));
    --tw-bg-opacity: 1;
  }
  
  .border-branch {
    border-color: var(--branch);
  }

  .text-branch {
    color: var(--branch);
  }
</style>
