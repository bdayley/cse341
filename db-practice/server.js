const express = require('express');
const app = express();
const mongodb = require('mongodb');

async function main() {
    const client = new mongodb.MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
    
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

}

main().catch(console.error);


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database...'));

// app.listen(3000, () => console.log('Server started...'));