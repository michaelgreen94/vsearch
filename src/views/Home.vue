<template>
  <div class="home container">
    <h3>Searching for {{movieName}}</h3>
    <form @submit.prevent="search">
      <input type="text" v-model="movieName">
    </form>
    <div class="row">
      <Results class="col" />
      <Details class="col" />
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
        movieName: ""
      };
    },
    methods: {
      search() {
        this.$store.dispatch("search", this.movieName);
      }
    },
    components: {
      Results,
      Details
    }
  };
</script>