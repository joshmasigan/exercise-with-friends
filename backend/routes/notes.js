const router = require("express").Router();
let Note = require("../models/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Error: " + err));
});
