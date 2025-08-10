import express from 'express';
import Book from '../models/booking.js';
import bookedseat from '../models/booked-seats.js';
import mongoose from 'mongoose';

const router = express.Router();

const seatSchema = new mongoose.Schema({
  seatIndex: Number,
});
const Seat = mongoose.model('Seat', seatSchema);
router.get('/', async (req, res) => {
    const book = await Book.find();
    res.send(book);
});
router.get('/booked-seats', async (req, res) => {
  const{movie}=req.query;
// console.log(`hello`);
    const seats = await bookedseat.find({movieId:movie});
   
    const allSeats = seats.flatMap(doc=> doc.bookedseats); 
    res.json({ bookedseats: allSeats });
});


router.post('/booked-seats/add', async (req, res) => {
  const insertseat = await bookedseat.create(req.body);
    res.send(insertseat);
});
export default router;