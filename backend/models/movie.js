import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // for your frontend routing like /movie/123
  title: { type: String, required: true },
  // language: { type: [String], required: true }, // example: ["English", "Hindi"]
  // certificate: { type: String, default: 'UA' },  // e.g. UA 13+
  // poster: { type: String, required: true },       // image URL
  // description: { type: String },                  // optional description
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
