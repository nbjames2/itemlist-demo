const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const auth = require('./middleware/auth');
const port = process.env.PORT || 4000;

// init (app, express) {
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '2MB' }));

// set up database
const connectionString = `mongodb://${process.env.MONGODB_URI}`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('connected to the database'));

app.use(cors({
  origin: process.env.SOURCE,
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));
app.options('*', cors());
app.use('/', auth);
app.use('/', require('./routes'));
// app.use(express.static('src/assets'));
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
