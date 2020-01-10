# JSON-savior

* This application is build with Node JS, JS, Jquery, CSS, and HTML

* The following HTML routes are created:


* GET /notes - will return the notes.html file.


* GET * - will return the index.html file


* The application have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

## Dowanload:

* To download and use this application, simply clone the repo and do "npm install" in command line. 
* to run the program ,type "node server.js" in the command line


## The following API routes are created:


* GET /api/notes - will read the db.json file and return all saved notes as JSON.


* POST /api/notes - will recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


* DELETE /api/notes/:id - will recieve a query paramter containing the id of a note to delete. This will give each note a unique id when it's saved. In order to delete a note, it  will read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.





## User Story

* AS A user, I want to be able to write and save notes
* I WANT to be able to delete notes I've written before
* SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

* For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being  able to take persistent notes allows users to have written information available when needed.


### Application will allow users to create and save notes.
### Application will allow users to view previously saved notes.
### Application will allow users to delete previously saved notes.