<template>
  <div class="w-full h-full">
    <div
      class="w-full bg-[url('../../public/images/bg_image.png')] overflow-hidden bg-center bg-cover h-screen relative flex items-center justify-center"
    >
      <img
        class="absolute top-5 -left-[90px] rotate-12 w-[200px] z-20"
        src="../../public/images/assets_2.png"
        alt=""
      />
      <img
        class="absolute top-5 -right-14 -rotate-12 w-[200px] z-20"
        src="../../public/images/assets_3.png"
        alt=""
      />
      <img
        class="absolute bottom-24 -right-32 w-[200px] z-20"
        src="../../public/images/assets_4.png"
        alt=""
      />
      <img
        class="absolute -bottom-10 right-0 w-[150px] z-20"
        src="../../public/images/assets_5.png"
        alt=""
      />
      <img
        class="absolute -bottom-10 left-0 w-[150px] z-20"
        src="../../public/images/assets_6.png"
        alt=""
      />
      <img
        class="absolute bottom-24 -left-14 w-[150px] z-20"
        src="../../public/images/assets_7.png"
        alt=""
      />
      <div
        class="w-[85%] bg-[#f5dbcc] text-primary-color rounded-full bg-opacity-50 flex flex-col h-[85%] mt-5 items-center justify-center text-center"
      >
        <div class="font-cinzel relative z-20">
          <h1 class="lg:text-3xl text-xl">WEDDING ANIVERSARY</h1>
          <div class="flex items-center justify-center gap-4 my-3">
            <div class="h-[1px] bg-primary-color flex-1"></div>
            <p class="text-xl font-montserrat">20 Years</p>
            <div class="h-[1px] bg-primary-color flex-1"></div>
          </div>
          <h1 class="text-3xl">DENNY & SRIWIE</h1>

          <RouterLink to="/more" class="text-sm inline-block">
            <p
              @click="audioStore.playAudio()"
              class="bg-primary-color text-white h-10 px-5 mt-8 flex items-center justify-center"
            >
              See More
            </p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAudioStore } from '@/stores/audio'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const audioStore = useAudioStore()
</script>
