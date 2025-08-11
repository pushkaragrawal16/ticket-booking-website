import dotenv from 'dotenv';
dotenv.config(); // Load .env first

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import session from 'express-session';
import Movie from './models/movie.js'; // mongoose
import passport from './passport.js';
import router from './routes/movieroutes.js';
import Book from './routes/BookingRoutes.js';

connectDB(); // connect to MongoDB

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/movies', router);
app.use('/book', Book);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: 'http://localhost:3000',
  })
);

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ success: true, user: req.user });
  } else {
    res.status(401).json({ success: false, message: 'Not authenticated' });
  }
});

app.post('/booking', (req, res) => {
  Movie.insertMany({
    id: req.body.movieId,
    title: req.body.title,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
