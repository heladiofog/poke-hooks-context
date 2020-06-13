import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
// Using the context imported

const PokemonList = () => {
  // Using the context imported
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext);
  // To remove a Pokemon from the available pokemons list
  // The more simplyfied "fat arrow function" sintax
  const removePokemonFromList = removedPokemon =>
    // return pokemons.filter(pokemon => pokemon !== removedPokemon);
   pokemons.filter(pokemon => pokemon !== removedPokemon);
  
  // To capture a pokemon
  const capture = pokemon => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removePokemonFromList(pokemon));
  }

  return (
    <div className="pokemon-list">
      <h2>Pokemon List</h2>
      {
        pokemons.map(pokemon =>
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <div>
              <span>{pokemon.name}</span>
              <button onClick={capture(pokemon)}>+</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default PokemonList;
