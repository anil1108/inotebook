const mongoose = require('mongoose');
const { Schema } = mongoose;
// defining schema to store Notes data in json format
const NotesSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },


})

// export module 
module.exports = mongoose.model('notes', NotesSchema);