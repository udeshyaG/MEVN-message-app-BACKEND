const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
const Messages = require("./db/MessageModel");
dotenv.config();

const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({
    message: "Full Stack Message Board 🚀",
  });
});

app.use("/messages", routes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
