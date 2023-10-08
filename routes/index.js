/* 
File Name:  index.js
Author:     Amell Ortiz
Date:       10-07-2023
Student ID: 301274861
*/
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;