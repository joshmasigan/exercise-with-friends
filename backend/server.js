const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

const notesRouter = require("./routes/notes");
const usersRouter = require("./routes/users");

app.use("./notes");
app.use("./users");

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
