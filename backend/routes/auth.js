const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// creating a user using : POST "/api/auth/createuser" . Doesn't require Auth. // No login required
// setting the output 1) It can be a json object or any
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'it should be, min 3').isLength({ min: 5 })
], async (req, res) => {

    // if there are errors return Bad requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Whether user with the same email exists already
    try {
        let user = await Userd.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: "Sorry user with the same email already exists" });
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        // res.json({error:'Please enter unique value for email', message: err.message})})
        res.json({ "Nice": "Well done Inserted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occurred");
    }
})

module.exports = router;