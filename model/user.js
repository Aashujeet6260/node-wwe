const moongose = require('mongoose');

const Schema = moongose.Schema;
const userSchema = new moongose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    work: {
        type: String,
        required: true,
        enum: ['developer', 'designer', 'Gamer', 'other']
    },
    salary: {
        type: Number,
        required: true
    }

});

// Create a model from the schema
const User = moongose.model('User', userSchema);
// Export the model 
module.exports = User;