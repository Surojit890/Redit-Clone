const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/Scratch-Redit',{})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err)});

module.exports = db;