const routes = require("express").Router();
const Messages = require("./db/MessageModel");

routes.get("/", async (req, res) => {
  const messages = await Messages.find();
  res.json(messages);
});

routes.post("/", (req, res) => {
  const newMessage = req.body;

  newMessage.created = Date.now();
  console.log(newMessage);

  const mess = new Messages(newMessage);
  mess
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

module.exports = routes;
