import React, { useState, useContext } from 'react'
import { SearchResultsContext } from '../context/searchResultsContext';
import { getPokemonByIdOrName } from '../services/pokemonAPI';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const context = useContext(SearchResultsContext);
  const navigate = useNavigate()

  const handleSearchButton = async () => {
      context?.setLoading(true)
      const results = await getPokemonByIdOrName(searchInput);
      results !== null ? context?.setSearchResults([results]) : context?.setSearchResults(null);
      navigate('/')
  }

  const handleEnterButton = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchButton();
   } else {
      return false;
   }
  }

  return(
    <div className='bar'>
    <form className="search-form">
      <div className="search-input-and-button">
        <label htmlFor='search-input' className="search-label">
          <input
            type={'text'}
            maxLength={12}
            className="search-input"
            placeholder='Nome do Pokemon, Tipo, ID, Região'
            value={searchInput}
            onChange={ ({ target }) => setSearchInput(target.value)}
            onKeyPress={(event) => handleEnterButton(event)}
          />
        </label>
        <button
        type='button'
        className='search-button'
        onClick={ handleSearchButton }
        >
          Pesquisar
        </button>
      </div>
    </form>
    </div>
  )
}

export default SearchBar
