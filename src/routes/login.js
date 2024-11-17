const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/login/login.html'));
})

router.post('/',async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({email, password});
        if(!user){
            res.status(200).send('Invalid Credentials');
        }
        res.redirect('/home');
    } catch(err){
        res.status(500).send('Error logging in');
    }
});


module.exports = router;