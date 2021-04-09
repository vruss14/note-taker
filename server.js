const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8080;
const notesDatabase = require('./db/db.json');

app.use(express.static('public')); // Important to load the CSS and index.js files successfully
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Successfully loads home page
app.get('/', (request, response) => response.sendFile(path.join(__dirname, '/public/index.html'))); 

// Successfully loads notes page when the user clicks on the home page button 
app.get('/notes', (request, response) => response.sendFile(path.join(__dirname, '/public/notes.html')));


// Retrieves all notes from the database when the page is first loaded

app.get('/api/notes', function (request, response) {
    response.json(notesDatabase);
});

// Adds new notes to the database, updates the JSON file, and returns new notes after they have been saved
app.post('/api/notes', function (request, response) {

    if (notesDatabase === undefined) {
        return;
    }

    const dataPath = path.join(__dirname, "/db/db.json");

    let note = request.body;

    notesDatabase.push(note);

    // Gives each note an ID based on its index
    for(let i = 0; i < notesDatabase.length; i++) {
        notesDatabase[i].id = i+1;
    }

    fs.writeFile(dataPath, JSON.stringify(notesDatabase), function (err) {
        if(err) {
            console.log(err);
        }

        console.log("Saved!");
    })

    response.json(note);

})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
