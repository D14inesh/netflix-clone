import mongoose from 'mongoose';

const trailerSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  url: { type: String, required: true }
});

export default mongoose.model('Trailer', trailerSchema);
