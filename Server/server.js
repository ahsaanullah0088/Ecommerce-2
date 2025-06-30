const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO;



app.use(cors({
    origin : "http://localhost:5173/",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders:[ "Content-Type,Authorization, Cache-Control, Exprires , Pragma"],
    credentials: true
}));

// server configuration
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// server connection 
mongoose.connect(MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});


