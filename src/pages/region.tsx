import React, { useContext, useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { SearchResultsContext } from '../context/searchResultsContext';
import ResultList from '../components/ResultList';
import Header from '../components/Header';
import { getUrl, makeArray, pokedexLimiter } from '../utils';
import Pagination from '../components/Pagination';
import { getPokeByGen } from '../services/pokemonAPI';
import IPokemon from '../Interfaces/IPokemon';

const RegionPage: React.FC = () => {
  const context = useContext(SearchResultsContext);

  const [results, setResults] = useState<(IPokemon)[]>([]);
  const [pagination, setPagination] = useState([0])
  const [activePage, setActivePage] = useState(1)
  const [inputPerPage, setInputPerPage] = useState(context?.perPage?.toString())
  const [generation, setGeneration] = useState(getUrl())

  function handlePagination () {
    if (context?.perPage !== undefined) {
      const pages = (pokedexLimiter(generation) / context?.perPage)
      const pagesToSubtract = pokedexLimiter(generation - 1) / context?.perPage

      const numOfPages = pages - pagesToSubtract
      console.log('numero de paginas: ', numOfPages, 'generation:', generation, 'pokeLimiter:', pokedexLimiter(generation), 'perPage:', context?.perPage)
      setPagination(makeArray(numOfPages))
    }
  }

  async function handlePerPageButton () {
    context?.setPerPage(Number(inputPerPage))
    const request = await getPokeByGen(Number(inputPerPage), 0, generation)
    context?.setSearchResults(request)
    setActivePage(1)
  }

  useEffect(function () {
    context?.setLoading(true)
    setGeneration(getUrl())
    handlePagination();
    if (context?.searchResults !== null && context?.searchResults !== undefined) {
      setResults(context?.searchResults as IPokemon[])
    }
    setInputPerPage(context?.perPage?.toString())
    setTimeout(() => context?.setLoading(false), 2000);
  }, [context, context?.perPage, results])

  useEffect(function () {
    setActivePage(1)
  }, [generation])

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
          <Pagination pagination={ page } activePage={activePage} setActivePage={ setActivePage } generation= { generation } key={ page } />
        ))}
      </div>
    </div> 
  )
}

export default RegionPage
