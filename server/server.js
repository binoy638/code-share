const express = require("express");

const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("This is the backend server for code share");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
