const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup/signup.html'));
});

router.post('/', async (req, res) => {
    const { email, password ,confirmPassword} = req.body;

    if(password !== confirmPassword){
        return res.status(400).send('Passwords do not match');
    }

    try{
        const user = new User({email, password});
        await user.save();
        res.redirect('/home');
    }   catch(err){
        res.status(500).send('Error creating user');
    }
});
module.exports = router;