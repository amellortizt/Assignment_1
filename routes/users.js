/* 
File Name:  users.js
Author:     Amell Ortiz
Date:       10-07-2023
Student ID: 301274861
*/
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;