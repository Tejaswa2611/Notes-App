import express from "express";
const router = express.Router();
import Note from "./../models/Note.js";

router.post("/list", async function (req, res) {
    var notes = await Note.find({ userid : req.body.userid });
    res.json(notes);

    // res.send("This is notes page");
  });
  router.post("/add", async function (req, res) {
    // res.json(req.body);
    // var found = await Note.find({userid:req.body.id})
    // if(found){
    await Note.deleteOne({id: req.body.id}); 
    // }
    const newNote = new Note({
      id : req.body.id,
      userid: req.body.userid,
      title : req.body.title,
      content : req.body.content,
    });
    await newNote.save();

    const response = {message : "New Note created!" + `id: ${req.body.id}`};
    res.json(response);

  });

  router.post("/delete", async function (req,res)
  {
    await Note.deleteOne({id: req.body.id}); 
    const response = {message : "Note deleted!" + `id: ${req.body.id}`};
    res.json(response);

  });
  export default router;