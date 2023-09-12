<template>
    <div class="mb-8 sm:mb-12">
        <h2 class="text-xl sm:text-2xl font-medium drop-shadow-md tracking-wide mb-3">
            {{ headerTitle }}
        </h2>
        <MovieSlider :searchQuery="passedSearchText" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import MovieSlider from './common/MovieSliderTop.vue'

export default {
    name: 'MovieSectionTop',
    props: ['searchText','headerTitle'],
    components: {
        MovieSlider
    },
    setup(props) {
        const passedSearchText = ref(props.searchText)

        return {
            MovieSlider,
            passedSearchText
        }
    }
}
</script>