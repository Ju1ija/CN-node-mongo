const { ObjectId } = require("bson");

exports.addMovie = async (collection, dataObj) => {
  try {
    const insertResult = await collection.insertOne(dataObj);
    console.log("Inserted documents =>", insertResult);
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async (collection) => {
  try {
    const listAll = await collection.find().toArray();
    console.log("Found documents =>", listAll);
  } catch (error) {
    console.log(error);
  }
}

exports.filterMovies = async (collection, key, value) => {
  try {
    const movie = {}
    movie[key] = value;
    const filteredResults = await collection.find(movie).toArray();
    console.log(filteredResults);
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (collection, movieId, key, value) => {
  try {
    const movie = {}
    movie[key] = value;
    const updateResult = await collection.updateOne({ _id: ObjectId(movieId) }, { $set: movie });
    console.log("Updated document =>", updateResult);
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (collection, movieId) => {
  try {
    const deleteResult = await collection.deleteMany({ _id: ObjectId(movieId) });
    console.log("Deleted documents =>", deleteResult);
  } catch (error) {
    console.log(error);
  }
}