const express = require('express');
const app = express();
const path = require('path');
require('./src/config/db.js');

app.set('views', path.join(__dirname, 'views'));
const loginRoutes = require('./src/routes/login.js');
const signupRoutes = require('./src/routes/signup.js');
const homeRoutes = require('./src/routes/home.js');

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/home', homeRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});