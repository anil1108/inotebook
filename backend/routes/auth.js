const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// creating a user using : POST "/api/auth/" . Doesn't require Auth.


// setting the output 1) It can be a json object or any
router.post('/', [
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','it should be, min 3').isLength({ min: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    .then(user => res.json(user))
    .catch(err => {console.log(err)
    res.json({error:'Please enter unique value for email', message: err.message})})
})

module.exports = router;