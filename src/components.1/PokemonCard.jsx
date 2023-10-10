// function PokemonCard(props) {
//   const {name, imgSrc} = props.pokemon;
//   return (
//     <figure>
//       <img src={imgSrc} alt={name}/>
//       <figcaption>{name}</figcaption>
//     </figure>
//   );
// }

// export default PokemonCard;

function PokemonCard(props) {
    console.log(props);
  
    return <figure>
    { props.pokemon.imgSrc !== undefined ?
       (<img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>)
       : (<p>???</p>)
    }
    <figcaption>{props.pokemon.name}</figcaption>
    </figure>;
  }
  
  
  export default PokemonCard;