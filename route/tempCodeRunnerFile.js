const express = require('express');
const router = express.Router();
const PPV =  require('../model/PPV'); // Import the PPV model

router.post('/', async (req, res) => {  
  try{
      const data = req.body;
      const newPPV = new PPV(data)

      const response = await newPPV.save(); // Save the new PPV document to the database
      console.log('Data received:', data);
      return res.status(201).json(response); // Return the saved PPV document as a JSON response     
  }catch{
      console.log('Error saving PPV data:', error);
      return res.status(500).json({ error: 'Failed to save PPV data' });
  }

});


router.get('/', async (req, res) => {
    try {
        const ppvs = await PPV.find(); // Fetch all PPVs from the database
        return res.status(200).json(ppvs); // Return the PPVs as a JSON response
        console.log('PPVs fetched successfully:', ppvs);
    } catch (error) {
        console.log('Error fetching PPVs:', error);
        return res.status(500).json({ error: 'Failed to fetch PPVs' });
    }
    });


module.exports = ppvrouter; // Export the router to be used in the main application file

