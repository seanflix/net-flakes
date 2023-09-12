<template>
    <page-wrapper 
    :title="'spiderman'" 
    :desc="'After turning himself in, a brilliant fugitive offers to help the FBI bag other baddies, but only if rookie profiler Elizabeth Keen is his partner.'"
    >
      <MovieSection :searchText="`new`" :headerTitle="`Trending Now`"/>
      <MovieSection :searchText="`action`" :headerTitle="`Visually Striking Western Action`"/>
      <MovieSectionTop :searchText="`empire`" :headerTitle="`Top 10 Movies`"/>
      <MovieSection :searchText="`witch`" :headerTitle="`Blockbuster Movies`"/>
      <MovieSection :searchText="`dead`" :headerTitle="`Adrenaline Rush Movies`"/>
      <MovieSection :searchText="`house`" :headerTitle="`Sci-Fi & Fantasy`"/>
    </page-wrapper>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import PageWrapper from '@/components/PageWrapper.vue'
  import MovieSection from '@/components/MovieSection.vue'
  import MovieSectionTop from '@/components/MovieSectionTop.vue'
  
  export default {
    components: {
      PageWrapper,
      MovieSection,
      MovieSectionTop
    },
    setup() {
      return {
        PageWrapper,
        MovieSection,
        MovieSectionTop
      }
    }
  }
  </script>
  