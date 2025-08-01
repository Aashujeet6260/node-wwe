const express = require('express');
const router = express.Router();
const User = require('../model/user'); // Import mongoose



router.post('/', async (req, res) => {

  try {
    const data = req.body; // get the data from the client end which we rec by the Bodyparser
    const newuser = new User(data); // create a new object/document of wwe model which save to the database

    const response = await newuser.save(); // Save the new object/document to the database
    return res.status(201).json(response)
    console.log('Data saved successfully:', response);
  } catch (error) {
    console.log('Error saving data:', error);
    return res.status(500).json({ error: 'Failed to save data' });
  }

});


router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    return res.status(200).json(users); // Return the users as a JSON response
    console.log('Users fetched successfully:', users);

  } catch (error) {
    console.log('Error fetching users:', error);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/:proffesion', async (req, res) => {
  const proffesion = req.params.proffesion; // Get the profession from the request parameters
  try {
    if (proffesion == 'developer' || proffesion == 'designer' || proffesion == 'Gamer' || proffesion == 'other') {
      const response = await User.find({ work: proffesion }); // Find users with the specified profession
      return res.status(200).json(response); // Return the users as a JSON response
    } else {
      console.log('Invalid profession:', proffesion);
      return res.status(400).json({ error: 'Invalid profession' }); // Return an
    }
  } catch (error) {
    console.log('Error fetching users by profession:', error);
    return res.status(500).json({ error: 'Failed to fetch users by profession' }); // Return an error response
  }
});




/// Update user by ID using router.put for updating user data in the database 

router.put('/:id', async (req, res) => {
  const id = req.params.id; // Get the user ID from the request parameters
  const updatedData = req.body; // Get the updated data from the request body
  try {
    const response = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
  }); // Update the user with the specified ID

    console.log('User updated successfully:', response);
    return res.status(200).json(response); // Return the updated user as a JSON response

    if (!response) {
      console.log('User not found with ID:', id);
      return res.status(404).json({ error: 'User not found' }); // Return an error if user not found
    }

  } catch (error) {
    console.log('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user' }); // Return an error response
  }



})


// Delete user by ID using router.delete for deleting user data from the database

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const response = await User.findByIdAndDelete(id); // Delete the user with the specified ID
    return res.status(200).json({ message: "User deleted successfully" });
    console.log('User deleted successfully:', response);

    if (!response) {
      console.log('User not found with ID:', id);
      return res.status(404).json({ error: 'User not found' }); // Return an error if user not found
    }

  } catch (error) {
    console.log('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user' }); // Return an error response
  }
})



module.exports = router; // Export the router to be used in the main application file


