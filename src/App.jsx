// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components.1/PokemonCard";
import { useState } from "react";
import ButtonNavBar from "./components.1/NavBar";




function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  
  const [pokemonIndex, indexOfPokemon] = useState(0);
  const pokemonNewList = pokemonList[pokemonIndex];

  const handleClickNext = () => {
    indexOfPokemon(pokemonIndex + 1);
  };
  
  const handleClickPrev = () => {
    indexOfPokemon(pokemonIndex - 1);
  };
  return (
    <div>
      <PokemonCard pokemon={pokemonNewList} />
      <ButtonNavBar 
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
      pokemonIndex={pokemonIndex}
      pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
