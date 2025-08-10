import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';
const bookingSchema = new mongoose.Schema({
 
 
  name: String,
  seats: [String],
  movie: String
});

const Book = mongoose.model('Book', bookingSchema);
export default Book;