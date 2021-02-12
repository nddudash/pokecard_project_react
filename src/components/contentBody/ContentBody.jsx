import React from "react";
import SearchBox from "../searchBox/SearchBox.jsx";
import PokemonCard from "../pokemonCard/PokemonCard.jsx";
// import pokemonFetchRequest from "../../services/pokemonSearchService";

class ContentBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      pokemonObject: null,
      randomAbility: null,
      randomMove: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value.toLowerCase(),
    });
  };

  searchFunction = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.searchValue)
      .then((responseObject) => responseObject.json())
      .then((pokemonJson) => {
        let randomAbility =
          pokemonJson.abilities[
            Math.floor(Math.random() * pokemonJson.abilities.length)
          ].ability;
        let randomMove =
          pokemonJson.moves[
            Math.floor(Math.random() * pokemonJson.moves.length)
          ].move;
        this.setState((state, props) => ({
          pokemonObject: pokemonJson,
          randomAbility: randomAbility,
          randomMove: randomMove,
        }));
      });
  };

  render() {
    let pokemonCard;
    (this.state.pokemonObject !== null)
      ? (pokemonCard = (
          <PokemonCard
            pokemonObject={this.state.pokemonObject}
            randomAbility={this.state.randomAbility}
            randomMove={this.state.randomMove}
          />
        ))
      : (pokemonCard = <span />);

    return (
      <div className="contentBody">
        <SearchBox
          searchFunction={this.searchFunction}
          handleChange={this.handleChange}
        />
        {pokemonCard}
        <p>Current Search Value:{this.state.searchValue}</p>
      </div>
    );
  }
}

export default ContentBody;
