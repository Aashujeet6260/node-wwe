
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PPVSchema =  new mongoose.Schema({
    userID:{
        type: String,
        required: true,
        unique: true
    }
    ,name:{
        type: String,
        required: true
    }
    ,year:{
        type: Number,
        required: true
    }
    ,month:{
        type: String,
        required: true
    },
    location:{
        type: [String],
        default: []
    }

});

// Create a model from the schema
const PPV = mongoose.model('PPV', PPVSchema);
// Export the model 
module.exports = PPV;