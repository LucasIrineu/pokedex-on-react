import React, { useState, useContext } from 'react'
import { SearchResultsContext } from '../context/searchResultsContext';
import { getPokemonByIdOrName, getPokemonByRegion } from '../services/pokemonAPI';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('name')

  const context = useContext(SearchResultsContext);

  const handleSearchButton = async () => {
    if (searchType === 'name') {
      context?.setLoading(true)
      const results = await getPokemonByIdOrName(searchInput);
      results !== null ? context?.setSearchResults([results]) : context?.setSearchResults(null);
    } else if (searchType === 'region') {
      context?.setLoading(true)
      const results = await getPokemonByRegion(searchInput);
      results !== null ? context?.setSearchResults(results) : context?.setSearchResults(null);
    }
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

    <div className="search-type">
      <label htmlFor="type-name" className="search-type-container">
        <input
          id="type-name"
          type="radio"
          value="name"
          onChange={({ target }) => setSearchType(target.value)}
          checked={ searchType === 'name'}
        />
        <span className="search-type-name">Nome / ID</span>
      </label>

      <label htmlFor="type-region" className="search-type-container">
        <input
          id="type-region"
          type="radio"
          value="region"
          onChange={({ target }) => setSearchType(target.value)}
          checked={ searchType === 'region'}
        />
        <span className="search-type-name">Região</span>
      </label>
    </div>
    </div>
  )
}

export default SearchBar
