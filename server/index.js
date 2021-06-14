const express = require('express');
const app = express();
const cors = require('cors');
const SERVER_PORT = 4000;

app.use(express.json());
app.use(cors());

app.listen(SERVER_PORT, function () {console.log(`Server running on ${SERVER_PORT}`)});

app.get("/api/users", (req, res) => {
    let friends = ["Darah", "Josh", "Jake", "Mike", "Martin"];
    res.status(200).send(friends)
  });

  // app.get("/weather/:temperature", (req, res) => {
  //     const { temperature } = req.params;
  //     const phrase = `<h3>It was ${temperature} today</h3>`;
  //     res.status(200).send(phrase)
  // });
  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase)
  });