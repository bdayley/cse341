const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongodb = require('./db/connect');

app
  .use(express.json()) // tells the app we'll be working with json
  .use(express.urlencoded({ extended: true })) // get the body; contacts controller req.params.id
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}/n` + `Exception origin: ${origin}`);
}); // this could be written to a file, rather than the log

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });