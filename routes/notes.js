const fb = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');





fb.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


fb.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
  });


  fb.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });



 //submitting notes?
fb.post('/', (req, res) => {
  
  const { title, note } = req.body;


  if (title && note) {
   
    const newFeedback = {
      title,
      note,
      
    };

    readAndAppend(newNotes, './db/notes.json');

    const response = {
      status: 'success',
      body: newNotes,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});


  module.exports = fb;