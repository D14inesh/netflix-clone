import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Movie from './models/Movie.js';
import Trailer from './models/Trailer.js';

import nowPlayingData from './nowPlaying.js';
import popularData from './popular.js';
import topRatedData from './topRated.js';
import upcomingData from './upcoming.js';
import trailerLinksData from './trailerLinks.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/netflix_clone';

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await Movie.deleteMany({});
    await Trailer.deleteMany({});

    // Add category fields and aggregate
    const allMovies = [
      ...nowPlayingData.map(m => ({ ...m, category: 'nowPlaying' })),
      ...popularData.map(m => ({ ...m, category: 'popular' })),
      ...topRatedData.map(m => ({ ...m, category: 'topRated' })),
      ...upcomingData.map(m => ({ ...m, category: 'upcoming' }))
    ];

    await Movie.insertMany(allMovies);
    console.log('Movies seeded successfully!');

    const trailersArray = Object.entries(trailerLinksData).map(([id, url]) => ({
      id: Number(id),
      url: url
    }));

    await Trailer.insertMany(trailersArray);
    console.log('Trailers seeded successfully!');

    console.log('Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
