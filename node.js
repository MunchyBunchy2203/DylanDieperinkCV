const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.

const uri =

"mongodb+srv://SnorreDDylan:Hockey123@cluster0.jx6xuef.mongodb.net/notesDB";

const client = new MongoClient(uri);

async function run() {

  try {

    await client.connect();

    // database and collection code goes here

    const db = client.db("notesDB");

    const coll = db.collection("notes");

    // insert code goes here

    const docs = [

      {title: document.getElementById("sName") , content: document.getElementById("sEmail")}
    ];

    const result = await coll.insertMany(docs);

    // display the results of your operation

    console.log(result.insertedIds);

  } finally {

    // Ensures that the client will close when you finish/error

    await client.close();

  }

}

run().catch(console.dir);