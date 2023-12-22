const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
require("dotenv").config();
const app = express();

// routes
const usersRoutes = require("./routes/users");
const tasksRoutes = require("./routes/tasks");

applyMiddleware(app);

app.use(usersRoutes);
app.use(tasksRoutes);


app.get("/", (req, res) => {
  res.send("Service Server Is Running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested URL [${req.url}] Is Invalid`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
