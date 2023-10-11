const ButtonNavBar = ({
  handleClickNext,
  handleClickPrev,
  pokemonIndex,
  pokemonList,
}) => {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrev}>précédent</button>
      ) : (
        <p></p>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>suivant</button>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default ButtonNavBar;
