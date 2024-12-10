<template>
  <div
    class="w-full h-full bg-primary-bg bg-center bg-cover flex items-center justify-center lg:px-10"
  >
    <div
      class="w-full md:w-[50vh] lg:w-[30vw] flex flex-col justify-center items-center h-full border border-primary-color"
    >
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
