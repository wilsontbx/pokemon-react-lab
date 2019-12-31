import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

const bulbasaur = pokemonData[0];

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div>
      <div>{name.english}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={bulbasaur} />
    </div>
  );
}

export default App;
