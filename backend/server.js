const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/messageSchema");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3030;

// connect to mongodb
const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server is connected to port ${port} and is connected to MongoDB`,
      );
    });
  })
  .catch((error) => {
    console.log("Unable to connect to server and/or MongoDB", error);
  });

// middleware
app.use(bodyParser.json());
app.use(cors());

// routes
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(201).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Unable to get messages" });
  }
});

app.post("/messages", async (req, res) => {
  try {
    const { name, message, added } = req.body;
    const newMessage = new Message({ name, message, added });
    await newMessage.save();
    res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Unable to add message" });
  }
});
