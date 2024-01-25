import React, { FC, useContext } from 'react'
import { SearchResultsContext } from '../context/searchResultsContext';
import IResultListProps from '../Interfaces/IResultListProps';
import PokemonCard from './PokemonCard';


const ResultList: FC<IResultListProps> = (props): JSX.Element => {
  const { pokemons } = props;
  const context = useContext(SearchResultsContext);

  return (
    <div className='result-container'>
      <div className='result-list'>
        {pokemons !== null && pokemons !== undefined && context?.loading === false &&
         pokemons.every((pokemon => pokemon.forms !== undefined)) && pokemons.map((pokemon) => (
          <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
        ))
      }
      </div>

        <div className="result-index">
          
        </div>
    </div>
  )
}

export default ResultList;
