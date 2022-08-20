const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://SnorreDDylan:Hockey123@cluster0.jx6xuef.mongodb.net/notesDB", {useNewUrlParser: true}, {userUnifiedTopology: true})

//create a data schema
const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
})

app.post("/", function(req, res){
    let newNote = new Note ({
        title: req.body.sName,
        content: req.body.sEmail
    });
    newNote.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("server is running on 3000");
})