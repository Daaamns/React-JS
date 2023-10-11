import { useState } from "react";

const ButtonNavBar = ({ handleClick, pokemonList }) => {
  return (
    <>
      {pokemonList.map((pokemon, pokemonIndex) => {
        return (
          <button key={pokemonIndex} onClick={ () => handleClick(pokemonIndex)}>
            {pokemon.name}
          </button>
        );
      })}
    </>
  );
};
{
  /* {pokemonIndex > 0 ? (
        <button onClick={handleClickPrev}>précédent</button>
      ) : (
        <p></p>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>suivant</button>
      ) : (
        <p></p>
      )} */
}

export default ButtonNavBar;
