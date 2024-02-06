import React, { useContext } from "react"
import IShowSideBar from "../Interfaces/IShowSideBar"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { getPokeByGen } from "../services/pokemonAPI"
import { SearchResultsContext } from "../context/searchResultsContext"

export default function SideBar({ active }: IShowSideBar) {
    const context = useContext(SearchResultsContext)
    function closeSideBar() {
        active(false)
    }

    async function handleResults (e: React.MouseEvent) {
        const generation = e.currentTarget.textContent
        
        if (generation !== null) {
            const genNumber = Number(generation[0])
            const request = await getPokeByGen(context?.perPage, 1, genNumber)
            context?.setSearchResults(request)
            context?.setActivePage(1)
        }
      }

    return (
        <>
            <div className="side-bar">
                <div className="close-sidebar-logo">
                    <FaTimes onClick={closeSideBar} />
                </div>
                
            </div>
            <div className="sidebar-text-container">
                <ul className="list-title">Gerações/Regiões
                    <Link to={'/gen/1'}>
                        <li onClick={handleResults}>1ª Geração (Kanto)</li>
                    </Link>
                    <Link to={'/gen/2'}>
                        <li onClick={handleResults}>2ª Geração (Johto)</li>
                    </Link>
                    <Link to={'/gen/3'}>
                        <li onClick={handleResults}>3ª Geração (Hoenn)</li>
                    </Link>
                    <Link to={'/gen/4'}>
                        <li onClick={handleResults}>4ª Geração (Sinnoh)</li>
                    </Link>
                    <Link to={'/gen/5'}>
                        <li onClick={handleResults}>5ª Geração (Unova)</li>
                    </Link>
                    <Link to={'/gen/6'}>
                        <li onClick={handleResults}>6ª Geração (Kalos)</li>
                    </Link>
                    <Link to={'/gen/7'}>
                        <li onClick={handleResults}>7ª Geração (Alola)</li>
                    </Link>
                    <Link to={'/gen/8'}>
                        <li onClick={handleResults}>8ª Geração (Galar)</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}