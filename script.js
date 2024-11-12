const express = require("express");
const app = express();
const path = require("path");
// Middleware to parse URL-encoded data
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(express.urlencoded({ extended: false }));

app.post("/survey", (req, res) => {
  console.log(req.body); // Parsed form data is accessible here
  console.log("header", req.method);

  res.send("Survey submitted successfully");
});

app.listen(3000, () => console.log("serving running"));
