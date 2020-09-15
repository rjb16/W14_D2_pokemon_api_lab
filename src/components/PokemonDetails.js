import React,{ Component } from 'react';

class PokemonDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonDetails: ''
    }
    this.loadDetails = this.loadDetails.bind(this);
  }

  loadDetails(){
    if (this.props.selectedPokemon) {
      const url = this.props.selectedPokemon.url;
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => this.setState({pokemonDetails: data}))
      .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.loadDetails();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.loadDetails();
    }
  }


  render() {
    if (!this.props.selectedPokemon) {
      return (
          <p>Select a pokemon from the dropdown</p>
      );
    }

    if (this.state.pokemonDetails) {
      return (
        <>
        <h4>{this.state.pokemonDetails.name}</h4>
        <p>{this.state.pokemonDetails.habitat.name}</p>
        <p>{this.state.pokemonDetails.generation.name}</p>
        </>
      );
    }
    return null;
  }
  
}
export default PokemonDetail;