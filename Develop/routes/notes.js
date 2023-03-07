const fb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

const PORT = 3001;
const app = express();



fb.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// app.get('/', (req, res) => {
//   res.sendFile('./public/notes.html', {root:__dirname})
//   });

  module.exports = fb;