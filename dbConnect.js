const { MongoClient } = require('mongodb');

// Replace this with your generated connection string from MongoDB Atlas.
const uri = "mongodb+srv://root:root@nftreon.wolns0x.mongodb.net/";

const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.error("Connection error:", err);
        client.close();
        return;
    }
    
    // Connected successfully
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("Connected to MongoDB Atlas!");
    client.close();
});