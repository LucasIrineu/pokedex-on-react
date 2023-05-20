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


[{
	"resource": "/home/lucas/Documentos/Pokedex-on-React/pokedex-on-react/src/context/searchResultsContext.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type 'Dispatch<SetStateAction<IPokemon[] | null>>' is not assignable to type '(input: string) => Promise<void>'.\n  Types of parameters 'value' and 'input' are incompatible.\n    Type 'string' is not assignable to type 'SetStateAction<IPokemon[] | null>'.",
	"source": "ts",
	"startLineNumber": 21,
	"startColumn": 60,
	"endLineNumber": 21,
	"endColumn": 76
}]
