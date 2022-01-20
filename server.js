const express = require('express');

// sets port
const PORT = process.env.PORT || 3001;
// initiate express server
const app = express();

const db = require('./db/db.json');







app.get('/api/db', (req, res) => {
    res.json(db)
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});