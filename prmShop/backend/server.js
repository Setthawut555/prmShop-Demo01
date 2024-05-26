const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = require("./connect");

app.get("/testConnect", async (req, res) => {
  try {
    await client.authenticate();
    res.send("Connection has been established successfully.");
  } catch (error) {
    res.send("Unable to connect to the database: ", error);
  }
});

app.get("/test", async (req, res) => {
  try {
    await client.authenticate();
    res.send("Connection has been established successfully.");
  } catch (error) {
    res.send("Unable to connect to the database: ", error);
  }
});

app.listen(port, () => {
  console.log("port : ", port);
});
