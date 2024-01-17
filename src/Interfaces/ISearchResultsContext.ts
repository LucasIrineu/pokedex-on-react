import { Dispatch, SetStateAction } from 'react';
import IPokemon from './IPokemon';

export default interface ISearchResultsContext {
  searchResults?: IPokemon[] | null | undefined;
  searchByIdOrName?: (input: string) => Promise<void>;
  search: (input: IPokemon[]) => void;
  setSearchResults: Dispatch<SetStateAction<IPokemon[] | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
