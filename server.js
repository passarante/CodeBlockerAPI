const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

// Load app variables
dotenv.config({ path: './config/config.env' });

// Connect Database
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server runnign on port ${PORT}`.yellow.bold);
});
