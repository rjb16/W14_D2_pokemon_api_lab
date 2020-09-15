import React, { Component } from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetails';

class PokemonContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            pokemon: [],
            selectedPokemon: ''

        };

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }
    componentDidMount(){
        const url = "https://pokeapi.co/api/v2/generation/1";
        fetch(url)
        .then(res => res.json())
        .then(generation => this.setState({pokemon: generation.pokemon_species}))
        .catch(err => console.log(err));
    }

    handlePokemonSelected(url) {
      this.setState({selectedPokemon: url});
    }

    render(){
        const selectedPokemon = this.state.pokemon.find((pokemon) => {
            return pokemon.url === this.state.selectedPokemon;
        });

        return (
          <div>
              <h2>Pokemon Container</h2>
              <PokemonSelector pokemon={this.state.pokemon} handlePokemonSelected={this.handlePokemonSelected}/>
              <PokemonDetail pokemon={selectedPokemon}/>
          </div>
      );
    }
}

export default PokemonContainer;