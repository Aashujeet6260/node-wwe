const mongooseURL = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Import mongoose to connect to MongoDB

//const mongooseUrl = 'mongodb://localhost:27017/wwe'; // Define the MongoDB connection URL
const mongooseUrl = process.env.MONGODB_URL; // Use the MongoDB URL from environment variables


mongooseURL.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})




// Connect to MongoDB database   

const db =  mongooseURL.connection;

// Listen for connection events using the event listner 

db.on('connected',()=>{
    console.log('Mongoose connected to the database');
});

db.on('disconnected',()=>{
    console.log('Mongoose disconnected from the database');
})

db.on('error', (err) => {
    console.error('Mongoose connection error:', err);
}); // Handle connection errors


module.exports = db; // Export the database connection for use in other files