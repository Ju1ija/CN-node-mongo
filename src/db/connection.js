const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj, newObj) => {
  try {
    await client.connect();
    console.log("connection successful");
    const db = client.db("testDb");
    const collection = db.collection("movies");
    await crudFunc(collection, dataObj, newObj);
    client.close();
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;