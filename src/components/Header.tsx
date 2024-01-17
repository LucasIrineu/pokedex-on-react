import React, { useState } from "react"
import logo from '../assets/pokedexlogo.png'
import { FaBars } from 'react-icons/fa'
import SideBar from "./SideBar"
export default function Header() {
    const [sideBar, setSideBar] = useState(false)

    function showSideBar() {
        setSideBar(!sideBar)
    }

    return (
        <>
            <div className="header">
                {!sideBar && <FaBars onClick={showSideBar}/>}
                <img src={logo} />
            </div>
            <div>
                {sideBar && <SideBar active={setSideBar}/>}
            </div>
        </>
    )
}