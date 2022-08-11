const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.options("*", cors());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const spacesRouter = require("./src/routes/spaces");

app.use("/spaces", spacesRouter);

app.listen(6600, () => {
  console.log("Server started on port 6600");
});
