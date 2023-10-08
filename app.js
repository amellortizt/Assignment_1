/*
File Name:  app.js
Author:     Amell Ortiz
Date:       10-07-2023
Student ID: 301274861
*/

const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

APP.set('views', PATH.join(__dirname, 'views'));
APP.set('view engine', 'ejs');

APP.get('/', (req, res) => {
    res.render('home');
});

APP.get('/contact', (req, res) => {
    res.render('contact');
});

APP.get('/services', (req, res) => {
    res.render('services');
});

APP.get('/about', (req, res) => {
    res.render('about');
});

APP.get('/projects', (req, res) => {
    res.render('projects');
});

APP.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = APP;