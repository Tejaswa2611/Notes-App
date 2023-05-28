// const express = require("express");
import express from "express";
const app = express();
// const mongoose = require("mongooosee");
import mongoose from "mongoose";
// const Note = require('./models/Note');
import bodyParser from "body-parser";
import noteRouter from './Routes/Note.js';
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://MongoProff:Yash%40iitian@cluster0.g4azoq5.mongodb.net/notesdb"
  )
  .then(function () {
    app.get("/", function (req, res) {
      const response = {message : "API works! "};
      res.json(response);
    });

    // const noteRouter = require('./Routes/Note.js');
    app.use("/notes",noteRouter);
    
  });
// MongoProff
// Yash@iitiansa
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log("Server started at port : " + PORT);
});
