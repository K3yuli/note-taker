const express = require('express');
const fs = require('fs');


// sets port
const PORT = process.env.PORT || 3001;
// initiate express server
const app = express();
// connect routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// use api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// middleware
// connects css, js & html
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});