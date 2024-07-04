const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/webinfo", require("./routes/webinfoRoutes"));

app.get("/api/webinfo", (req, res) => {
  res.status(200).json({ Message: "hello" });
});

app.listen(port, () => {
  console.log(`Server Listning on port ${port}`);
});
