<template>
  <div
    class="w-full h-[4.5rem] top-0 bg-transparent flex justify-between px-8 items-center border-b border-primary-color"
  >
    <div class="w-[35px] h-[55px] relative flex flex-col items-center justify-center">
      <p class="absolute left-0 top-0 font-neue text-2xl">D</p>
      <div class="h-[1px] w-8 absolute bg-black -rotate-[48deg]"></div>
      <p class="text-end absolute right-0 bottom-0 font-neue text-2xl">S</p>
    </div>
    <button>
      <PhList class="text-2xl" weight="bold" />
    </button>
  </div>
</template>

<script setup>
import { PhList } from '@phosphor-icons/vue'
</script>
