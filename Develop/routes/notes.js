const express = require('express');

const PORT = 3001;
const app = express();


app.get('/', (req, res) => {
  res.sendFile('./public/notes.html', {root:__dirname})
  });