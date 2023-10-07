/*
File Name:  about.ejs
Author:     Amell Ortiz
Date:       10-07-2023
Student ID: 301274861
*/

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; // Use the dynamic port assigned by Heroku or 3000 as fallback

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
