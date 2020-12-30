const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 4000;

// init (app, express) {
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '2MB' }));
// app.use(bodyParser.urlencoded({ extended: true }));
// set up database
// const connectionString = `${process.env.MONGODB_URI}`;
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => console.log('connected to the database'));
// app.use(cookieParser());

// set up session
// app.use(session({
//   secret: process.env.SESS_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({
//     mongooseConnection: db
//   }),
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 2
//   }
// }));

// app.use(express.static(__dirname + 'public'));
// }
app.use(cors({
  origin: 'http://itemlist.bairdjames.com',
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));
app.use('/', require('./routes'));
// app.use(express.static('src/assets'));
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
