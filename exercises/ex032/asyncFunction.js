async function loadFile() {
  let fileIsLoaded = true;
  if (fileIsLoaded) {
    return "The promise loaded the file succesfully";
  } else {
    throw "The system ran into an exception!";
  }
}

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
