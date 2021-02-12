import React from "react";
import "./PokemonCard.css";

class pokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // randomAbility: "",
      // randomAbilityInfo: "",
      // randomMove: "",
      // randomMoveInfo: "",
      pokemonCardObject: {
        placeholder: "url('/assets/images/cards/Basic - Blank.png')",
        colorless: "url('/assets/images/cards/Basic - Colourless.png')",
        dark: "url('/assets/images/cards/Basic - Darkness.png')",
        dragon: "url('/assets/images/cards/Basic - Dragon.png')",
        fairy: "url('/assets/images/cards/Basic - Fairy.png')",
        fighting: "url('/assets/images/cards/Basic - Fighting.png')",
        fire: "url('/assets/images/cards/Basic - Fire.png')",
        grass: "url('/assets/images/cards/Basic - Grass.png')",
        lightning: "url('/assets/images/cards/Basic - Lightning.png')",
        psychic: "url('/assets/images/cards/Basic - Psychic.png')",
        steel: "url('/assets/images/cards/Basic - Steel.png')",
        water: "url('/assets/images/cards/Basic - Water.png')",
      },
    };
  }

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
            {this.props.randomAbility.name}
          </div>
          <div className="pokemonCardAbilityBody">
            {this.props.abilityInfo}
          </div>
        </div>
        <div className="pokemonCardMoveDiv">
          <div className="pokemonCardMoveTitle">
            {this.props.randomMove.name}
          </div>
          <div className="pokemonCardMoveBody">
            {this.props.moveInfo}
          </div>
        </div>
      </div>
    );
  }
}

export default pokemonCard;
