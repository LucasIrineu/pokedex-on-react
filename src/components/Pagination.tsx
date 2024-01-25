import React, { FC, useContext } from "react";
import IPaginationProps from "../Interfaces/IPaginationProps";
import { SearchResultsContext } from "../context/searchResultsContext";
import { getFirstGen } from "../services/pokemonAPI";

const Pagination: FC<IPaginationProps> = (props)=> {
    const { pagination, setActivePage, activePage } = props;
    const context = useContext(SearchResultsContext)

    async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        context?.setLoading(true)
        setActivePage(Number(event.currentTarget.value))
        console.log(event.currentTarget.value)
        const request = await getFirstGen(context?.perPage, (pagination - 1))
        context?.search(request)
        }
    
    return (
        <button
            value={pagination}
            onClick={ handleClick }
            className={ pagination === activePage ? 'active-page' : 'index-button'}
        >
            {pagination}
        </button>
    )
}

export default Pagination