import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {

    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( (_, index) => index + 1 )
}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() -0.5)

    const pokemons = getPokemonsNames( mixedPokemons.slice(0,4))

    return pokemons
}


const getPokemonsNames = async (pokemons = []) => {
    const promesas = pokemons.map((id) => {
      return pokemonApi.get(`/${id}`);
    });

    const respuestas = await Promise.all(promesas);

    const retorno = respuestas.map(( {data: {name, id}} ) => {
      return {
        name: name,
        id  : id,
      };
    });

    console.log({retorno});

    return retorno;
  };

export default getPokemonOptions;
