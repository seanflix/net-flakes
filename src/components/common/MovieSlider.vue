<template>
    <carousel class="group" :breakpoints="breakpoints" :wrapAround="true" :transition="1000">
        <slide v-for="movie in movieResults" :key="movie">
            <div class="w-full px-0.5 lg:px-1">
                <button class="w-full">
                    <img class="aspect-video w-full object-cover" :src="movie.Poster">
                </button>
            </div>
        </slide>
        <template #addons>
            <div class="hidden group-hover:block">
                <navigation />
                <pagination />
            </div>
        </template>
    </carousel>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'MovieSlider',
    props: ['searchQuery'],
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    setup(props) {
        let movieResults = ref([])

        const breakpoints = ref(
            {
                150: {
                    itemsToShow: 2.2,
                    snapAlign: 'start',
                    itemsToScroll: 2
                },
                600: {
                    itemsToShow: 2.2,
                    snapAlign: 'start',
                    itemsToScroll: 2
                },
                800: {
                    itemsToShow: 3.2,
                    snapAlign: 'start',
                    itemsToScroll: 3
                },
                900: {
                    itemsToShow: 4.2,
                    snapAlign: 'start',
                    itemsToScroll: 4
                },
                1100: {
                    itemsToShow: 5.2,
                    snapAlign: 'start',
                    itemsToScroll: 5
                },
                1400: {
                    itemsToShow: 6.2,
                    snapAlign: 'start',
                    itemsToScroll: 6
                },
            }
        )

        const searchMovies = async (searchString) => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=5911bb3&s=${searchString}`);
            const data = await response.json();
            movieResults.value = data.Search
        }

        onMounted(() => {
            searchMovies(props.searchQuery)
        })

        return {
            Carousel,
            Slide,
            Pagination,
            Navigation,
            movieResults,
            breakpoints,
            searchMovies
        }
    }
}

</script>

<style>

.carousel {
    position: relative !important;
}

.carousel__pagination {
    max-width: fit-content !important;
    position: absolute !important;
    top: -12px !important;
    right: 0px !important;
    margin: 0px !important;
    opacity: 60% !important;
    margin-right: 5% !important;
}

.carousel__icon {
    fill: white;
}

.carousel__prev, .carousel__next {
    background-color: transparent !important;
}

.carousel__icon {
    color: white !important;
}

.carousel__pagination-button {
    padding: 1px !important;
}

.carousel__pagination-button::after {
    background: #ffffff51 !important;
    opacity: 50% !important;
    height: 2px !important;
}

.carousel__pagination-button--active::after {
    background: #ffffff !important;
    opacity: 100% !important;
    height: 2px !important;
}

/* .carousel__viewport {
    overflow-x: hidden;
    overflow-y: hidden;
} */

</style>