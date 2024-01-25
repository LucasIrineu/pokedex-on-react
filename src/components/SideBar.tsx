import React, { useContext } from "react"
import IShowSideBar from "../Interfaces/IShowSideBar"
import { FaTimes } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { getFirstGen } from "../services/pokemonAPI"
import { SearchResultsContext } from "../context/searchResultsContext"

export default function SideBar({ active }: IShowSideBar) {
    const context = useContext(SearchResultsContext)
    function closeSideBar() {
        active(false)
    }

    async function handleResults () {
        const request = await getFirstGen(context?.perPage, 1)
        context?.setSearchResults(request)
      }

    return (
        <div className="side-bar">
            <div className="close-sidebar-logo">
                <FaTimes onClick={closeSideBar} />
            </div>
            <ul className="list-title">Gerações/Regiões
                <Link to={'/gen/1'}>
                    <li onClick={handleResults}>1ª Geração (Kanto)</li>
                </Link>

            </ul>
        </div>
    )
}