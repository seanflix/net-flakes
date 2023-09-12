<template>
  <nav class="fixed w-full z-40 top-0 text-white font-light tracking-wide transition-all duration-500" :class="{'bg-custom-gray': (scrollPosition > 30)}">
    <div class="bg-navbar">
      <div class="px-5 xl:px-14 flex justify-between mx-auto p-5">
        <div class="hidden lg:flex items-center space-x-5 text-sm">
          <img class="h-6 mr-5" src="./assets/logo.png" alt="">
          <router-link to="/">
            Home
          </router-link>
          <router-link to="/tv-shows">
            TV Shows
          </router-link>
          <router-link to="/movies">
            Movies
          </router-link>
          <router-link to="/new">
            New & Popular
          </router-link>
          <!-- <router-link to="/about">
            My List
          </router-link>
          <router-link to="/about">
            Browse by Languages
          </router-link> -->
        </div>
        <div class="flex lg:hidden items-center space-x-5 text-sm">
          <img class="h-6 mr-5" src="./assets/logo.png" alt="">
          <router-link to="/">
            Browse
          </router-link>
          <router-link to="/tv-shows">
            Kids
          </router-link>
        </div>
        <div class="flex items-center space-x-5 text-sm">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <button class="hidden lg:block" href="">
            Kids
          </button>
          <div class="hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </div>
          <div class="hidden md:flex items-center space-x-2">
            <img class="h-7 w-7 object-cover rounded-sm" src="https://cdn140.picsart.com/fe5238dd-bd3b-4854-ad9f-5c96b4f00f2b/384220269032203.jpg?type=webp&to=crop&r=256" alt="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view/>

  <footer class="bg-custom-gray pt-24 pb-5">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center">
        <button class="p-3">
          <svg class="h-6 w-6 fill-white"  viewBox="0 0 24 24" stroke="currentColor"  stroke-width="0"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </button>
        <button class="p-3">
          <svg class="h-6 w-6 text-white"  viewBox="0 0 24 24" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </button>
        <button class="p-3">
          <svg class="h-6 w-6 fill-white"  viewBox="0 0 24 24" stroke="currentColor"  stroke-width="0"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
        </button>
        <button class="p-3">
          <svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
        </button>
      </div>
      <div class="grid grid-cols-4 gap-5 text-xs text-neutral-500 mt-4">
        <button class="text-left hover:underline">Audio Description</button>
        <button class="text-left hover:underline">Help Center</button>
        <button class="text-left hover:underline">Gift Cards</button>
        <button class="text-left hover:underline">Media Center</button>
        <button class="text-left hover:underline">Investor Relations</button>
        <button class="text-left hover:underline">Jobs</button>
        <button class="text-left hover:underline">Terms of Use</button>
        <button class="text-left hover:underline">Privacy</button>
        <button class="text-left hover:underline">Legal Notices</button>
        <button class="text-left hover:underline">Cookie Preferences</button>
        <button class="text-left hover:underline">Corporate Information</button>
        <button class="text-left hover:underline">Contact Us</button>
      </div>
      <button class="px-2 py-1 border border-neutral-500 text-neutral-500 text-xs mt-7">
        Service Code
      </button>
      <span class="text-[11px] block text-neutral-500 mt-4">
        © 2023 dev.seanflix
      </span>
    </div>
  </footer>
</template>

<script>
import {onMounted, ref} from 'vue'

export default {
  setup() {
    const scrollPosition = ref(null)

    const updateScroll = () => { scrollPosition.value = window.scrollY }

    onMounted(() => { window.addEventListener('scroll', updateScroll) })

    return {
      scrollPosition,
      updateScroll
    }
  }
}
</script>

<style scoped>
  .bg-navbar {
    background: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
  }
</style>