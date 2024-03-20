// Import required packages
const express = require('express');
require('dotenv').config();

// Create an instance of the Express app
const app = express();

// Configure bodyParser middleware to parse request bodies
app.use(express.json());

// Define the port number
const port = process.env.PORT || 9000;

// Load routes
const authRoutes = require('./routes/registerRoute');

// Register routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port,'0.0.0.0', () => {
    
    console.log(`Server started on port ${port}`);
})