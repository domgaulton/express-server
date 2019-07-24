import dotenv from "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import uuidv4 from "uuid/v4";

// See documentation https://expressjs.com/en/starter/installing.html
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.dom = users[1]; // assigns user as Dom Gaulton (user 1)
  next();
});

// with express request and response are shortened
app.get("/", (req, res) => {
  res.send("home page message");
});

let users = {
  1: {
    id: "1",
    username: "Dom Gaulton"
  },
  2: {
    id: "2",
    username: "Dave Davids"
  }
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1"
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2"
  }
};

// // set a URL
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Sally",
//     age: 30
//   };
//   // able to send header type JSON very easily
//   res.send(user);
// });

// app.get("/users", (req, res) => {
//   return res.send("GET HTTP method on user resource");
// });

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post("/messages", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.dom.id
  };

  messages[id] = message;

  return res.send(message);
});

app.delete("/messages/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;

  return res.send(message);
});

app.get("/session", (req, res) => {
  return res.send(users[req.dom.id]);
});

app.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

app.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
