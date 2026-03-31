import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  original_title: String,
  title: String,
  overview: String,
  backdrop_path: String,
  poster_path: String,
  release_date: String,
  vote_average: Number,
  popularity: Number,
  genre_ids: [Number],
  category: { type: String, required: true } // 'nowPlaying', 'popular', 'topRated', 'upcoming'
});

export default mongoose.model('Movie', movieSchema);
