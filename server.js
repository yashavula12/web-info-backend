const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");

const app = express();

const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/api/webinfo", require("./routes/webinfoRoutes"));

app.use(errorHandler);

app.get("/api/webinfo", (req, res) => {
  res.status(200).json({ Message: "hello" });
});

app.listen(port, () => {
  console.log(`Server Listning on port ${port}`);
});
