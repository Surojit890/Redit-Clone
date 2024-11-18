const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', async(req, res) => {
    try{
        const posts = await post.find();
        res.render('home', { posts });
    }
    catch(err){
        res.status(500).send('Error fetching posts');
    }
});

module.exports = router;