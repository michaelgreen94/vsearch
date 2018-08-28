<template>
  <div class="details">
    <h1>Details</h1>
    <img :src="'https://image.tmdb.org/t/p/w200'+movieDetails.poster_path" alt="">
    <h2>{{movieDetails.title}}</h2>
    <p>{{movieDetails.overview}}</p>
  </div>
</template>
<script>
  export default {
    name: "Details",
    data() {
      return {};
    },
    props: ["movieDetails"]
  };
</script>
<style>
</style>