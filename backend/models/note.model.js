const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Note must contain a title"],
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Note = new mongoose.model("Note", noteSchema);
module.exports = Note;
