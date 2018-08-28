<template>
  <div class="home container">
    <h3>Searching for {{movieName}}</h3>
    <form @submit.prevent="search">
      <input type="text" v-model="movieName">
    </form>
    <div class="row">
      <Results :movieData="movies" v-on:viewDetails="setActiveMovie" class="col" />
      <Details :movieDetails="activeMovie" class="col" />
    </div>
  </div>
</template>

<script>
  import Results from "@/components/Results";
  import Details from "@/components/Details";
  export default {
    name: "home",
    data() {
      return {
        movieName: "",
        activeMovie: {}
      };
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      }
    },
    methods: {
      search() {
        this.$store.dispatch("search", this.movieName);
      },
      setActiveMovie(movie) {
        this.activeMovie = movie;
      }
    },
    components: {
      Results,
      Details
    }
  };
</script>