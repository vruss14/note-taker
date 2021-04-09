# Note Taker

## Description

This is a simple note taking application that enables a user to write and save notes as needed. The application can be used for keeping track of important information such as business meeting notes, appointments, and other thoughts that a user does not want to forget.

Users can begin by writing a first note after the application loads. Once the user has included a note title and inputted text, a save button appears. The user can then click the save button, and previous notes are displayed on the left-hand side of the page. Previous notes can be viewed again, but these are in read only mode and thus cannot be edited again. After viewing previous old notes, the user can click the pencil icon at the top right of the page to start a new note.

Future development ideas for this project include:

- Adding delete options so that previous notes can be deleted one by one, multiple selected notes can be deleted, and a clear all option that would delete all existing notes
- Adding an update option so that a user can update a previous note and the contents will be saved accordingly
- Adding an option for the user to pin certain notes to the top of the page so that highest priority notes are most easily visible
- Adding options for the user can style notes based on their personal preferences (i.e. background color)

While this application was fairly challenging to create, I have a much better understanding of how a server interprets and responds to client requests. I am excited to continue to build upon my knowledge base and create more complex applications.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
            
## Installation

To avoid additional installation steps, the most recent deployed version of this application can be viewed on Heroku: https://note-taker-144.herokuapp.com/

Otherwise, for this application to run correctly, express is a dependency that should be installed. After the code has been cloned to a repository, navigate to the repository and run  ```npm init -y ``` then ```npm install express```.

To start the application from the command line after installations have been complete, run ```node server.js```. The console log will indicate which port the application is using. From there, view the application in the browser by visiting the correct link, for example, http://localhost:8080/. To stop the server from running, use Control + C in the command line.
            
## Usage

This application is intended to be used to write and store simple notes. Additional functionality will be added in the future.

A gif that demonstrates how to create a note:

![GIF of creating a note](/public/assets/gifs/note-creation.gif)

A gif that demonstrates how to toggle between notes and create a note after viewing previous notes (which are read only):

![GIF of creating a note](/public/assets/gifs/note-toggle.gif)


## License

This project has not yet been licensed, and thus, standard copyright laws apply.
            
## Contributing

Valerie Russell is the sole contributor to this project. Starter code for the front end of the application was provided by the MSU Coding Bootcamp. 
            
## Tests

There are currently no tests for this application.
            
## Questions

If you have any questions about this application my GitHub username is
vruss14 and you can view my GitHub profile at https://github.com/vruss14.

If you have additional questions, feel free to reach out to me at vruss14@gmail.com.
