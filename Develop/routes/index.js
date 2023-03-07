const express = require('express');
const notesRouter = require('./noutes');

const PORT = 3001;

const app = express();


app.get('*', (req, res) => {
  res.sendFile('./public/index.html', {root:__dirname})
  });

  module.exports = app;