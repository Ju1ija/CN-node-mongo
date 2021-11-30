const connection = require("./db/connection");
const { addMovie, listMovies, filterMovies, updateMovie, deleteMovie } = require("./utils");

const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    const newMovie = {
      title: process.argv[3],
      actor: process.argv[4],
      rating: process.argv[5]
    }
    if (process.argv[6]) {
      newMovie.genre = process.argv[6];
    }
    await connection(addMovie, newMovie);
  } else if (command === "list") {
    await connection(listMovies);
  } else if (command === "filter") {
    await connection(filterMovies, process.argv[3], process.argv[4]);
  } else if (command === "update") {
    await connection(updateMovie, process.argv[3], process.argv[4], process.argv[5]);
  } else if (command === "delete") {
    await connection(deleteMovie, process.argv[3]);
  } else {
    console.log("Incorrect Input");
  }
}

app();