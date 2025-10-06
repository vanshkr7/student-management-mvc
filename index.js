const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const studentRoutes = require('./routes/studentRoutes');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB! 🚀');
        // Start the server only after a successful DB connection
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

// Use the student routes
// We can add a prefix like '/api' to all our student routes
app.use('/api', studentRoutes); 
