const router = require('express').Router();

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1))
});

// POST /api/notes should receive a new note to save on the request body,
// add it to the db.json file, and then return the new note to the client.
// You'll need to find a way to give each note a unique id when it's saved
// (look into npm packages that could do this for you).
function createNewNote(body, notesArray) {
    const newNote = body;
    if(!Array.isArray(notesArray))
    notesArray = [];

    if(notesArray/length === 0)
    notesArray.push(0);

    body.id = notesArray[0];
    notesArray[0]++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(_dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}
router.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);

});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
// In order to delete a note, you'll need to read all notes from the db.json file,
// remove the note with the given id property, and then rewrite the notes to the db.json file.

function deleteNote(id, notesArray) {
    for(let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];
        if(note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(_dirname, '.db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );
            break;
        }
    }
}

router.delete('api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
})


module.exports = router;