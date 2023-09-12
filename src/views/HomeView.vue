<template>
  <page-wrapper 
  :title="'badman'" 
  :heading="'#2 in Action Series Today'" 
  :desc="'Battered, broken and bereaved, a private investigator must muscle his way through a tangle of lies to uncover the truth behind a mansion murder.'"
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
