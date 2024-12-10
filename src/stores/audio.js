import { defineStore } from 'pinia'

export const useAudioStore = defineStore('AudioStore', {
  state: () => ({
    audioStat: false,
    audio: null,
  }),

  actions: {
    playAudio() {
      if (this.audioStat === false) {
        this.audioStat = true
        this.audio = new Audio(`public/audio/auh.mp3`)
        this.audio.play()
      } else {
        this.audio.currentTime = 0
      }
    },
  },
})
