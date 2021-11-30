const { MongoClient } = require("mongodb");

require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, val1, val2, val3) => {
  try {
    await client.connect();
    const db = client.db("testDb");
    const collection = db.collection("movies");
    await crudFunc(collection, val1, val2, val3);
    client.close();
  } catch (error) {
    console.log(error);
  }
}

module.exports = connection;