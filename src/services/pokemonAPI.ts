import IPokemon from '../Interfaces/IPokemon';
import ISimplePokemon from '../Interfaces/ISimplePokemon';
import { capitalizeString } from '../utils';

export const getPokemonByIdOrName = async (idOrName: string) => {
  try {
  const lowerCaseStr = idOrName.toLowerCase();
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCaseStr}/`);
  const requestJson = await request.json();

  return sortPokemonData(requestJson);
  } catch (error) {
    return null
  }

}

export const getFirstGen = async (perPage: number, index: number) => {
  
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${index * 15}`
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
  const requestJson = await request.json();
  const { results } = requestJson;

  const promises = results.map(async (element: ISimplePokemon) => {
    const pokeToAdd = await getPokemonByIdOrName(element.name);
    return pokeToAdd;
  });

  const result = Promise.all(promises);

  return result;
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
