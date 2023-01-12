// this one works
// https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database

require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  const collection = await client.db("test").collection("devices");
  // perform actions on the collection object
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

  client.close();
});

