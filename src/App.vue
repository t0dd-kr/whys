<script setup>
</script>

<template>
  <router-view/>
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
    background-color: var(--primary);
  }
  
  .border-primary {
    border-color: var(--primary);
  }

  .text-primary {
    color: var(--primary);
  }
</style>
