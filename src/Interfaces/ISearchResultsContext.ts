import { Dispatch, SetStateAction } from 'react';
import IPokemon from './IPokemon';

export default interface ISearchResultsContext {
  searchResults?: IPokemon[] | null | (IPokemon | null)[];
  searchByIdOrName?: (input: string) => Promise<void>;
  search: (input: IPokemon[] | null | (IPokemon | null)[]) => void;
  setSearchResults: Dispatch<SetStateAction<IPokemon[] | null | (IPokemon | null)[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  perPage: number | undefined;
  setPerPage: Dispatch<SetStateAction<number | undefined>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}
