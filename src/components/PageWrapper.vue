<template>
  <div class="bg-gradient-to-t from-custom-gray to-transparent from-0% to-30% relative bg-cover">
    <div class="hidden xl:block absolute aspect-video w-full z-10">
      <video ref="heroVideo" class="w-full min-h-screen aspect-video object-cover object-center" :poster="require(`@/assets/${title}bg.webp`)" @ended="onVideoEnd" muted>
        <source :src="require(`@/assets/${title}.mp4`)" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute bottom-0 h-full w-full bg-gradient-to-t from-custom-gray to-transparent from-0% to-30%"></div>
    </div>
    <div class="hidden xl:flex relative justify-between items-end px-14 pt-20 pb-48 w-full aspect-[19/9] min-h-screen z-30">
      <div class="max-w-[40%]">
        <div :class="{ 'small-image' : shrinked }" class="w-full transition-all duration-1000 ease-out drop-shadow">
          <img :src="require(`@/assets/${title}.webp`)" alt="">
        </div>
        <div :class="{ 'hide' : shrinked }" class="show ease-out">
          <div v-if="heading" class="pt-5 flex items-center space-x-3">
            <div class="flex flex-col items-center text-center bg-red-600 pl-2 pr-3 pt-1.5 rounded-md font-bold">
              <span class="text-xs">TOP</span>
              <span class="text-lg font-medium tracking-tighter -mt-2">10</span>
            </div>
            <h2 class="text-3xl font-medium drop-shadow-md">
              {{ heading }}
            </h2>
          </div>
          <p class="pt-5 text-xl font-light drop-shadow-md">
            {{ desc }}
          </p>
        </div>
        <div class="flex items-center space-x-3 mt-5">
          <button class="bg-gray-100 bg-opacity-80 hover:bg-opacity-60 text-xl px-7 py-2 font-medium rounded flex items-center text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-2">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
            </svg>
            Play
          </button>
          <button class="bg-neutral-600 bg-opacity-80 hover:bg-opacity-60 text-xl px-7 py-2 font-medium rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
      <div class="flex items-center space-x-5 -mr-14">
        <template v-if="videoEnded">
          <button @click="replayVideo" class="p-2 border bg-transparent border-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </template>
        <template v-else>
          <button @click="toggleMute" class="p-2 border bg-transparent border-white rounded-full">
            <svg v-if="muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          </button>
        </template>
        <div class="bg-neutral-700 bg-opacity-50 text-xl pl-4 py-2 pr-20 border-l-4 border-white">
          13+
        </div>
      </div>
    </div>
    <div class="relative pl-5 pt-20 xl:pt-0 xl:pl-14 xl:-mt-20 z-20">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import MovieSection from '@/components/MovieSection.vue'

export default {
  name: 'PageWrapper',
  props: ['title','heading','desc'],
  components: {
    MovieSection
  },
  setup() {
    const muted = ref(true)
    const videoEnded = ref(false)
    const heroVideo = ref(null)
    const shrinked = ref(false)

    const toggleMute = () => {
      heroVideo.value.muted = !heroVideo.value.muted
      muted.value = !muted.value
    }

    const onVideoEnd = () => {
      videoEnded.value = true
      shrinked.value = false
      heroVideo.value.load()
    }

    const replayVideo = () => {
      videoEnded.value = false
      shrinked.value = true
      heroVideo.value.play()
    }

    const shrinkElement = () => {
      setTimeout(() => {
        shrinked.value = true
      }, 3000);
    }

    const videoDelay = () => {
      setTimeout(() => {
        if (heroVideo.value && heroVideo.value.play) {
          heroVideo.value.play()
          shrinkElement()
        }
      }, 2000);
    }

    onMounted(() => {
      videoDelay()
    })
    
    return {
      MovieSection,
      heroVideo,
      onVideoEnd,
      replayVideo,
      toggleMute,
      muted,
      videoEnded,
      shrinkElement,
      shrinked,
    }
  }
}
</script>

<style scoped>
.show {
  opacity: 1;
  max-height: 200px;
  transition: opacity 0.35s, max-height 1s;
}

.hide {
  opacity: 0 !important;
  max-height: 0 !important;
  transition: opacity 0.35s, max-height 1s !important;
}

.small-image {
  width: 350px !important;
}
</style>