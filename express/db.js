const mongooseURL = require('mongoose');

// Import mongoose to connect to MongoDB

mongooseURL.connect('mongodb://localhost:27017/wwe', {
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