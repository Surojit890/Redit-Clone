const express = require('express');
const router = express.Router();

// Sample data to be rendered dynamically
const posts = [
    { title: 'Post 1', content: 'This is the content of post 1.' },
    { title: 'Post 2', content: 'This is the content of post 2.' },
    { title: 'Post 3', content: 'This is the content of post 3.' }
];

router.get('/', (req, res) => {
    res.render('home', { posts });
});

module.exports = router;