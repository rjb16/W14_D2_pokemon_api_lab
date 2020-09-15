import React from 'react';

const PokemonSelector = (props) => {
  const options = props.pokemon.map((pokemon) =>{
  return <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>
  });

  function handleChange(event) {
    props.handlePokemonSelected(event.target.value);
  }

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a pokemon...</option>
      {options}
    </select>
  )
}

export default PokemonSelector;