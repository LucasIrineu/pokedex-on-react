import React, { useState, ReactNode } from 'react'
import IPokemon from '../Interfaces/IPokemon';
import { SearchResultsContext } from './searchResultsContext';

interface IProps {
  children: ReactNode
}


export const SearchResultsProvider = ({ children }: IProps) => {
  const [searchResults, setSearchResults] = useState<IPokemon[] | null | (IPokemon | null)[]>(null);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState<number | undefined>(8);
  const [activePage, setActivePage] = useState<number>(1);

  const search = (input: IPokemon[] | null | (IPokemon | null)[]) => {
    setSearchResults(input);
  }

  return (
    <SearchResultsContext.Provider value = {
      { 
        searchResults,
        setSearchResults,
        search,
        loading,
        setLoading,
        perPage,
        setPerPage,
        activePage,
        setActivePage,
      }
    }>
      {children}
    </SearchResultsContext.Provider>
  )
}
