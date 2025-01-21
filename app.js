const express = require('express');
const app = express();
const path = require('path');
require('./src/config/db.js');
app.use(express.static('../public/'));

app.set('views', path.join(__dirname, 'views'));
const loginRoutes = require('./src/routes/login.js');
const signupRoutes = require('./src/routes/signup.js');
const homeRoutes = require('./src/routes/home.js');
const uploadRoutes = require('./src/routes/upload.js');
const mypostsRoutes = require('./src/routes/mypost.js');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('uploads', express.static(path.join(__dirname,'uploads')));

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/home', homeRoutes);
app.use('/upload', uploadRoutes);
app.use('/mypost', mypostsRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port} - ${"http://localhost:3000/login"}`);
});

