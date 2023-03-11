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
  
  const { title, text } = req.body;


  if (title && text) {
   
    const newNotes = {
      title,
      text,
      id: uuid(),
      
    };

    readAndAppend(newNotes, './db/db.json');

    const response = {
      status: 'success',
      body: newNotes,
    };

    res.json(response);
  } else {
    res.json('Error in posting notes');
  }
});




fb.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes.findByIdAndDelete(id)
  .then(result => {
    res.json({redirect: '/notes'})
    .catch(err => {
      console.log(err);
    })
  })

})

  module.exports = fb;