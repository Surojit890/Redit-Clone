const express = require('express');
const Router = express.Router();
const path = require('path');

const Post = require('../models/post');

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/upload.html'));
});

Router.post('/', async(req, res) => {
    const{title, content} = req.body;
    if(!title || !content){
        return res.status(400).send('Title and content are required');
    }
        try{
            const post = new Post({title, content});
            await post.save();
            res.redirect('/home');
        }
        catch(err){
            res.status(500).send('Error creating post');
        }
    
});

Router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    try{
        await Post.findByIdAndDelete(id);
        res.redirect('/home');
    }
    catch(err){
        res.status(500).send('Error deleting post');
    }
});

module.exports = Router;