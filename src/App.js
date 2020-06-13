import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';
import CapturedPokemon from './components/CapturedPokemon';
import Pokedex from './components/Pokedex';
// Context Provider for Pokemon
import { PokemonProvider } from './context/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemon />
        {/* <Pokedex /> */}
      </div>
    </PokemonProvider>
  );
}

export default App;
