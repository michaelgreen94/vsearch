import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)


let movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    }
  },
  actions: {
    search({ commit, dispatch }, searchTerm) {
      movieApi.get(searchTerm)
        .then(res => {
          commit('setMovies', res.data.results)
        })
    }
  }
})