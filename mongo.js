const { MongoClient } = require('mongodb');

async function main (){

    const uri ="mongodb+srv://SnorreDDylan:Hockey123@cluster0.jx6xuef.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await createInput(client,{
            title: document.getElementById("email").value,
            content: document.getElementById("name").value
        })

    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);

async function createInput(client, newInput){
    const result = await client.db("notesDB").collection("notes").insertOne(newInput);

    console.log(`New Input created with the following ID: ${result.insertId}`);
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}
