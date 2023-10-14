// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import PokemonCard from "./components.1/PokemonCard";
import { useEffect, useState } from "react";
import ButtonNavBar from "./components.1/NavBar";

function App() {
  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },
    []
  );
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

  const handleClick = (pokemonIndex) => {
    indexOfPokemon(pokemonIndex);
    {(pokemonList[pokemonIndex].name === "pikachu") ?
    setTimeout(() => {
      alert("pika pika");
    }, 500) : null
   }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonNewList} />
      <ButtonNavBar
        handleClick={handleClick}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
