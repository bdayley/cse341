const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const mongodb = require('./db/connect');

// app.use('/', require('./routes'));

app
  .use(express.json())
  .use(express.urlencoded({ extended: true}))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });


  // TODO: 
  // add routes for Render
  // test those requests