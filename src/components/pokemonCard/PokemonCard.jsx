import React from "react";
import "./PokemonCard.css";

class pokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomAbility: "",
      randomAbilityInfo: "",
      randomMove: "",
      randomMoveInfo: "",
      pokemonCardObject: {
        placeholder: "url('/assets/images/cards/Basic - Blank.png')",
        colorless: "url('/assets/images/cards/Basic - Colouress.png')",
        dark: "url('/assets/images/cards/Basic - Darkness.png')",
        dragon: "url('/assets/images/cards/Basic - Dragon.png')",
        fairy: "url('/assets/images/cards/Basic - Fairy.png')",
        fighting: "url('/assets/images/cards/Basic - Fighting.png')",
        fire: "url('/assets/images/cards/Basic - Fire.png')",
        grass: "url('/assets/images/cards/Basic - Grass.png')",
        lightning: "url('/assets/images/cards/Basic - Lightning.png')",
        psychic: "url(c/assets/images/cards/Basic - Psychic.png')",
        steel: "url('/assets/images/cards/Basic - Steel.png')",
        water: "url('/assets/images/cards/Basic - Water.png')",
      },
    };
  }

  componentDidMount() {
    this.generateRandomInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokemonObject !== this.props.pokemonObject) {
      this.generateRandomInfo();
    }
  }

  generateRandomInfo() {
    let randomAbility = this.props.pokemonObject.abilities[
      Math.floor(Math.random() * this.props.pokemonObject.abilities.length)
    ].ability;

    if (randomAbility) {
      this.fetchAbilityInfo()
    }

    let randomMove = this.props.pokemonObject.moves[
      Math.floor(Math.random() * this.props.pokemonObject.moves.length)
    ].move;

    this.setState((state, props) => ({
      randomAbility: randomAbility,
      randomMove: randomMove,
    }));
  }

  fetchAbilityInfo = () => {
    fetch(this.state.randomAbility.url)
      .then((responseObject) => responseObject.json())
      .then((abilityObject) => {
        this.setState((state, props) => ({
          randomAbilityInfo: abilityObject.effect_entries[1].short_effect,
        }));
      });
  };

  render() {
    let pokemonCardBackground;
    let primaryType = this.props.pokemonObject.types[0].type.name;
    switch (primaryType) {
      case "normal":
      case "flying":
        pokemonCardBackground = this.state.pokemonCardObject.colorless;
        break;
      case "dark":
        pokemonCardBackground = this.state.pokemonCardObject.dark;
        break;
      case "dragon":
        pokemonCardBackground = this.state.pokemonCardObject.dragon;
        break;
      case "fairy":
        pokemonCardBackground = this.state.pokemonCardObject.fairy;
        break;
      case "fighting":
      case "rock":
      case "ground":
        pokemonCardBackground = this.state.pokemonCardObject.fighting;
        break;
      case "fire":
        pokemonCardBackground = this.state.pokemonCardObject.fire;
        break;
      case "grass":
      case "bug":
        pokemonCardBackground = this.state.pokemonCardObject.grass;
        break;
      case "electric":
        pokemonCardBackground = this.state.pokemonCardObject.lightning;
        break;
      case "ghost":
      case "psychic":
      case "poison":
        pokemonCardBackground = this.state.pokemonCardObject.psychic;
        break;
      case "steel":
        pokemonCardBackground = this.state.pokemonCardObject.steel;
        break;
      case "water":
      case "ice":
        pokemonCardBackground = this.state.pokemonCardObject.water;
        break;
    }

    return (
      <div
        className="pokemonCardDiv"
        style={{
          backgroundImage: pokemonCardBackground,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pokemonCardName">
          {this.props.pokemonObject.species.name}
        </div>
        <div className="pokemonCardSpriteDiv">
          <img
            className="pokemonCardSpriteImage"
            src={this.props.pokemonObject.sprites.front_default}
            alt="sprite.jpg"
          />
        </div>
        <div className="pokemonCardAbilityDiv">
          <div className="pokemonCardAbilityTitle">
            {this.state.randomAbility.name}
          </div>
          <div className="pokemonCardAbilityBody">
            {this.state.randomAbilityInfo}
          </div>
        </div>
        <div className="pokemonCardMoveDiv">
          <div className="pokemonCardMoveTitle">
            {this.state.randomMove.name}
          </div>
          <div className="pokemonCardMoveBody"></div>
        </div>
      </div>
    );
  }
}

export default pokemonCard;
