function pokemonFetchRequest(searchValue) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + searchValue)
    .then((responseObject) => responseObject.json())
    .then((pokemonJson) => pokemonJson);
}

export default pokemonFetchRequest;
