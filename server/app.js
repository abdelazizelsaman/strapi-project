require('dotenv').config()
const express = require("express");
const activity = require('./api/activity');
const log = require('./api/log');


const app = express();

//parse query params
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/activity", activity);
app.use("/log", log);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

