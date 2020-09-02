var path=require("path");
const { v4: uuidv4 } = require('uuid');

const notes = require("../db/db.json");

 module.exports=function(app){
     app.get("/api/notes",function(req,res){
         res.json(notes);
     });

     app.post("/api/notes",function(req,res){
         let newNote=req.body;
         newNote.id=uuidv4()
         notes.push(newNote);
         res.json(newNote);
     });
    app.delete("/api/notes/:id",function(req,res){
        let deleteNote=req.params.id;
        for(var i=0;i<notes.length;i++){
            if(deleteNote==notes[i].id){
                slice(notes[i],1);
            }
        }
        return res.send();
    });
 }
