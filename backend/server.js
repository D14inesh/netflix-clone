import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Movie from './models/Movie.js';
import Trailer from './models/Trailer.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/netflix_clone';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/movies/:category', async (req, res) => {
  try {
    const movies = await Movie.find({ category: req.params.category });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/trailers/:id', async (req, res) => {
  try {
    const trailer = await Trailer.findOne({ id: Number(req.params.id) });
    if (!trailer) {
      return res.status(404).json({ message: 'Trailer not found' });
    }
    res.json(trailer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
