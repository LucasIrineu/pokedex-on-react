import React, { FC, useContext, useEffect } from 'react';
import { SearchResultsContext } from '../context/searchResultsContext';
import ICardProps from '../Interfaces/ICardProps';
import { capitalizeString } from '../utils';

const PokemonCard: FC<ICardProps> = (props): JSX.Element => {
  const { pokemon } = props;
  const { name, height, weight, types, sprites, id } = pokemon;

  const context = useContext(SearchResultsContext);


  useEffect(() => {
    context?.setLoading(false);
  }, [])

  return (
    <div className='card'>
      <img src = { sprites.front_default } />
      <h4 className='pokemon-name'>{ name }</h4>
      <div className='pokemon-type-container'>
        { types.map((t, index) => (
        <div key={ index } className='pokemon-type' id={t.type.name} > { capitalizeString(t.type.name) } </div>
      )) }
      </div>
      <p className='pokemon-height'> { height } m </p>
      <p className='pokemon-weight'> { weight } kgs </p>
      <p className='pokemon-id'> #{ id } </p>
    </div>
  )
}

export default PokemonCard;
