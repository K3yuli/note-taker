const router = require('express').Router();

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', (req, res) => {
    res.json(notesData)
});

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).
router.post('/api/notes', (req, res) => {
    if(notesData.length == 0) {
        req.body.id = '0';
    } else {
        req.body.id = JSON.stringify(JSON.parse(notesData[notesData.length - 1].id) + 1);
    }
    console.log('req.body.id:' + req.body.id);

    // pushes

});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
// In order to delete a note, you'll need to read all notes from the db.json file,
// remove the note with the given id property, and then rewrite the notes to the db.json file.

router.delete((re, res) => {

})


module.exports = router;