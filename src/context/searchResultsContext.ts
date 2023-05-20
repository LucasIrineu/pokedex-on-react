import { createContext } from 'react'
import ISearchResultsContext from '../Interfaces/ISearchResultsContext';

export const SearchResultsContext = createContext<ISearchResultsContext | null>(null);

