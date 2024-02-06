import IPokeJSON from '../Interfaces/IPokeJSON';
import IPokemon from '../Interfaces/IPokemon';
import ISimplePokemon from '../Interfaces/ISimplePokemon';
import { capitalizeString, pokedexLimiter } from '../utils';

export const getPokemonByIdOrName = async (idOrName: string) => {
  try {
  const lowerCaseStr = idOrName.toLowerCase();
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCaseStr}/`);
  const requestJSON = await request.json();

  return sortPokemonData(requestJSON);
  } catch (error) {
    return null
  }
}

export const getPokeByGen = async (perPage: number | undefined, pageIndex: number, generation: number) => {
  if (perPage === undefined) return null
  

  const limiter = pokedexLimiter(generation)
  
  let offSet = (perPage * pageIndex) + pokedexLimiter(generation - 1) - perPage
  if (offSet < pokedexLimiter(generation - 1)) {
    offSet = pokedexLimiter(generation - 1)
  } 
  console.log('perPage:', perPage, 'pageIndex:', pageIndex, 'perPage * pageIndex:', (perPage * pageIndex), 'pokeLimiter (-1):', pokedexLimiter(generation - 1), 'offset:', offSet)
  let endpoint = '';

  if (((perPage + offSet) <= limiter) && ((perPage + offSet) >= pokedexLimiter(generation - 1) + 1)) {
    endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offSet}`
    console.log('aqui:', endpoint)
  } else {
    const lastPage = limiter - offSet
    endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${lastPage}&offset=${offSet}`
    console.log('aqui:2', endpoint)
  }

  const request = await fetch(endpoint);
  const requestJSON = await request.json();
  
  return await getMultiplePokemons(requestJSON)
}

export const getPokemonByRegion = async (region: string) => {
  let endpoint = ''
  switch (region.toLowerCase()) {
    case 'all':
      endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=1008';
      break;
    case 'kanto':
      endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      break;
    case 't':
    endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=15';
    break;
    default:
      endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=9';
      break;
  }

  const request = await fetch(endpoint);
  const requestJSON = await request.json();
  
  return await getMultiplePokemons(requestJSON)
}

const sortPokemonData = (pokemonJson: IPokemon): IPokemon => {
  const { id, name, height, weight, forms, sprites, types } = pokemonJson;

  const capitalizedName = capitalizeString(name);

  return {
    id,
    name: capitalizedName,
    height: (height / 10),
    weight: (weight / 10),
    forms,
    sprites,
    types
  };
}

const getMultiplePokemons = async (JSON: IPokeJSON) => {
  const { results } = JSON;
  const promises = results.map(async (element: ISimplePokemon) => {
    const pokeToAdd = await getPokemonByIdOrName(element.name);
    return pokeToAdd;
  });

  const result = await Promise.all(promises);

  if (result.every((pokemon => pokemon !== null && pokemon.id !== undefined))) {
    return result
  }

  return null
  
}