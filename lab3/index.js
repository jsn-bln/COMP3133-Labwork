const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');


require('dotenv').config();

const uri = process.env.URI;
const port = process.env.PORT || 8080;


const app = express();

app.use(express.json());






mongoose.connect(uri)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



app.use('/restaurants', restaurantRoutes);

app.listen(port, () => {
  console.log(`listening on port:${port}`)
})