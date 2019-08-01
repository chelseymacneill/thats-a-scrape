let mongoose = require("mongoose");

// Save a reference to the Schema constructor 
let Schema = mongoose.Schema; 

// Using the Schema constructor 
let NoteSchema = new Schema({
    // note_title 
    note_title: String,

    // Note body 
    body: String
});

// This creates our model from the above schema
let Note = mongoose.model("Note", NoteShema);

// Export the Note model
module.exports = Note;