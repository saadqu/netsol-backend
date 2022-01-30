const express = require('express');
const students = require('./students');
const app = express();

app.use('/students', students);

module.exports = app;