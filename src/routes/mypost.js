const express = require('express');
const router = express.Router();
const post = require('../models/post');

// Sample data to be rendered dynamically

router.get('/', async(req, res) => {
    try{
        const posts = await post.find();
        res.render('mypost', { posts });
    }
    catch(err){
        res.status(500).send('Error fetching posts');
    }
});

module.exports = router;