import React, { useContext, useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { SearchResultsContext } from '../context/searchResultsContext';
import ResultList from '../components/ResultList';
import Header from '../components/Header';
import { getUrl, makeArray, pokedexLimiter } from '../utils';
import Pagination from '../components/Pagination';
import { getFirstGen } from '../services/pokemonAPI';
import IPokemon from '../Interfaces/IPokemon';

const RegionPage: React.FC = () => {
  const context = useContext(SearchResultsContext);

  const [results, setResults] = useState<(IPokemon)[]>([]);
  const [pagination, setPagination] = useState([0])
  const [activePage, setActivePage] = useState(1)
  const [inputPerPage, setInputPerPage] = useState(context?.perPage?.toString())

  function handlePagination () {
    if (context?.perPage !== undefined) {
      const numOfPages = pokedexLimiter(getUrl()) / context?.perPage
      console.log('é', context?.perPage)
      setPagination(makeArray(numOfPages))
    }
  }

  async function handlePerPageButton () {
    context?.setPerPage(Number(inputPerPage))

    const request = await getFirstGen(Number(inputPerPage), 0)
    context?.setSearchResults(request)
  }

  useEffect(function () {
    context?.setLoading(true)
    handlePagination();
    if (context?.searchResults !== null && context?.searchResults !== undefined && context.searchResults.every((e) => e !== null)) {
      setResults(context?.searchResults as IPokemon[])
    }
    setInputPerPage(context?.perPage?.toString())
    setTimeout(() => context?.setLoading(false), 2000);
  }, [activePage, context?.perPage, results])

  return (
    <div>
      <Header/>
      <h4 className='region-title'>Kanto</h4>
      <h2 className='region-subtitle'>#1 - #151</h2>
      {(results === null || results === undefined) && context?.loading === false && <h3 className='text-message'> Olá treinador, utilize a barra de pesquisa! </h3> }
      <div className='perPage-container'>
        <label>Exibir por pagina:
          <input
            type='text'
            maxLength={3}
            value={inputPerPage}
            onChange={ ({ target }) => setInputPerPage(target.value)}
          />
        </label>
        <button type='button' onClick={handlePerPageButton}>Aplicar</button>
      </div>
      { context?.loading !== true && context?.searchResults !== null && context?.searchResults !== undefined && <ResultList pokemons={context?.searchResults as IPokemon[]} />}

    {context?.loading === true && <LoadingScreen />}
    <div className='pagination-container'>
      {pagination.map((page) => (
        <Pagination pagination={ page } activePage={activePage} setActivePage={ setActivePage } key={ page } />
      ))}

    </div>
    <div>
        
    </div>
    </div> 
  )
}

export default RegionPage
