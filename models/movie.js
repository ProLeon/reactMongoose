const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  actors: { type: String, required: true },
  year: String,
  date: { type: Date, default: Date.now },
  poster: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
