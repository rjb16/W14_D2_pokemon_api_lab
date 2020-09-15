import React from 'react';

const PokemonDetail = (props) => {
  if (!props.pokemon) {
    return (
        <p>Select a pokemon from the dropdown</p>
    );
  }

return <h4>{props.pokemon.name}</h4>
}

export default PokemonDetail;