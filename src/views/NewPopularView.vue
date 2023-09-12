<template>
    <page-wrapper 
    :title="'italianjob'" 
    :heading="'#2 in Movies Today'"
    :desc="'After a heist in Venice goes awry, a crew of skilled thieves vows revenge against a former ally and hatches an elaborate scheme to recover the loot in LA.'"
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
  