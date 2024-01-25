import React, { useContext, useState } from "react"
import logo from '../assets/pokedexlogo.png'
import { FaBars } from 'react-icons/fa'
import SideBar from "./SideBar"
import { Link } from "react-router-dom"
import { SearchResultsContext } from "../context/searchResultsContext"

export default function Header() {
    const [sideBar, setSideBar] = useState(false)
    const context = useContext(SearchResultsContext)

    function showSideBar() {
        setSideBar(!sideBar)
    }

    function handleClick() {
        context?.setSearchResults(null)
        return null
    }

    return (
        <>
            <div className="header">
                {!sideBar && <FaBars onClick={showSideBar}/>}
                <Link to={'/'}>
                    <img src={logo} onClick={handleClick}/>
                </Link>
            </div>
            <div>
                {sideBar && <SideBar active={setSideBar}/>}
            </div>
        </>
    )
}