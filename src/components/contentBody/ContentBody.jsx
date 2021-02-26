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
      abilityInfo: null,
      randomMove: null,
      moveInfo: null,
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

        fetch(this.state.randomAbility.url)
          .then((responseObject) => responseObject.json())
          .then((abilityObject) => {
            this.setState((state, props) => ({
              abilityInfo: abilityObject.effect_entries[1].short_effect,
            }));
          });

        fetch(this.state.randomMove.url)
          .then((responseObject) => responseObject.json())
          .then((moveObject) => {
            this.setState((state, props) => ({
              moveInfo: moveObject.effect_entries[0].short_effect,
            }));
          });
      });
  };

  render() {
    let pokemonCard;
    this.state.abilityInfo && this.state.moveInfo !== null
      ? (pokemonCard = (
          <PokemonCard
            pokemonObject={this.state.pokemonObject}
            randomAbility={this.state.randomAbility}
            abilityInfo={this.state.abilityInfo}
            randomMove={this.state.randomMove}
            moveInfo={this.state.moveInfo}
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
