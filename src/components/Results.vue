<template>
  <div class="results">
    <h1>RESULTS HERE!</h1>
    <div v-for="movie in movieData" class="result" :key="movie.id">
      <img @click="viewDetails(movie)" :src="'https://image.tmdb.org/t/p/w200'+movie.poster_path" alt="">
      <h4>{{movie.title}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Results",
    data() {
      return {};
    },
    methods: {
      viewDetails(movie) {
        this.$emit("viewDetails", movie);
      }
    },
    props: ["movieData", "username"]
  };
</script>

<style>
</style>