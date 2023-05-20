import React, { useState, ReactNode } from 'react'
import IPokemon from '../Interfaces/IPokemon';
import { SearchResultsContext } from './searchResultsContext';

interface IProps {
  children: ReactNode
}


export const SearchResultsProvider = ({ children }: IProps) => {
  const [searchResults, setSearchResults] = useState<IPokemon[] | null>(null);
  const [loading, setLoading] = useState(false);

  const search = (input: IPokemon[]) => {
    setSearchResults(input);
  }

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults, search, loading, setLoading }}>
      {children}
    </SearchResultsContext.Provider>
  )
}
