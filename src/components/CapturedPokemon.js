import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const CapturedPokemon = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext);
  // To remove a pokemon from capturedLis
  const releasePokemon = releasedPokemon =>
    capturedPokemons.filter(pokemon => pokemon !== releasedPokemon);

  // To update the pokemons lists when a release occurs
  const release = pokemon => () => {
    setCapturedPokemons(releasePokemon(pokemon));
    setPokemons([...pokemons, pokemon]);
  }

  return (
    <div className="pokemon-list">
      <h2>Captured Pokemons</h2>
      {
        capturedPokemons.map(pokemon =>
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <div>
              <span>{pokemon.name}</span>
              <button onClick={release(pokemon)}>-</button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default CapturedPokemon;
