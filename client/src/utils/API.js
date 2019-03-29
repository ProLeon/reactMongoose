import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";
export default {

  getSavedMovies: function() {
    return axios.get("/api/movies");
  },

  getMovie: function(id) {
    return axios.get("/api/movies/" + id);
  },

  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },

  saveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  },
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }

};
