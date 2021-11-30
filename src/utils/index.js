exports.addMovie = async (collection, dataObj) => {
  try {
    await collection.insertOne(dataObj);
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async (collection) => {
  try {
    const listAll = await collection.find().toArray();
    console.log(listAll);
  } catch (error) {
    console.log(error);
  }
}

exports.filterMovies = async (collection, actorName) => {
  try {
    const filteredResults = await collection.find({ actor: actorName }).toArray();
    console.log(filteredResults);
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (collection, movieTitle, actorName) => {
  try {
    await collection.updateOne({ title: movieTitle }, { $set: { actor: actorName } });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (collection, movieTitle) => {
  try {
    await collection.deleteMany({ title: movieTitle });
  } catch (error) {
    console.log(error);
  }
}