const express = require('express');
const User = require('../models/User');
const router = express.Router();

// creating a user using : POST "/api/auth/" . Doesn't require Auth.


// setting the output 1) It can be a json object or any
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);
})

module.exports = router;