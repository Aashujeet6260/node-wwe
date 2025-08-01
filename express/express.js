

const express = require('express') // Import express to create a web server
const app = express()  // Create an instance of Express
const db = require('./db'); // Import the database connection
require('dotenv').config(); // Load environment variables from .env file


const bodyParser = require('body-parser'); // Import body-parser to parse request bodies
app.use(bodyParser.json()); // Use body-parser to parse JSON request bodies



const ppvRouter = require('../route/ppvroute'); // Import the PPV router
app.use('/ppv', ppvRouter); // Use the PPV router for all routes


const wweRouter = require('../route/wweroute'); // Import the WWE router
app.use('/wwe', wweRouter); // Use the WWE router for all routes starting with '/wwe'


const PORT = process.env.PORT || 3000; // Set the port to listen on, defaulting to 3000 if not specified

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
}) // Start the server on port 3000
