import React, { useContext, useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import SearchBar from '../components/SearchBar';
import { SearchResultsContext } from '../context/searchResultsContext';
import logo from '../assets/pokedexlogo.png'
import ResultList from '../components/ResultList';

const Home: React.FC = () => {
  const context = useContext(SearchResultsContext);

  const [results, setResults] = useState(context?.searchResults);

  useEffect(function () {
    context?.setLoading(true);
    setResults(context?.searchResults) ;
    setTimeout(() => context?.setLoading(false), 1000);
  }, [context?.searchResults])

  return (
    <div className="homePage" id="homePage">
      <img src={logo} className='main-logo'></img>
      <SearchBar />
      { context?.loading !== true && results !== null && results !== undefined && <ResultList pokemons={ results } />}

    {(results === null || results === undefined) && context?.loading === false && <h3 className='text-message'> Olá treinador, utilize a barra de pesquisa! </h3> }
    {context?.loading === true && <LoadingScreen />}
    </div>
  )
}

export default Home
