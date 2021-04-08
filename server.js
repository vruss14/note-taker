const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static('public')); // Important to load the CSS and index.js files successfully
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (request, response) => response.sendFile(path.join(__dirname, '/public/index.html'))); // Successfully loads home page
app.get('/notes', (request, response) => response.sendFile(path.join(__dirname, '/public/notes.html'))); // Successfully loads notes page when the user clicks on the home page button 

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

