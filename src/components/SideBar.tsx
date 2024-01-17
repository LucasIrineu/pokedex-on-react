import React from "react"
import IShowSideBar from "../Interfaces/IShowSideBar"
import { FaTimes } from "react-icons/fa"
import { getPokemonByRegion } from "../services/pokemonAPI"

export default function SideBar({ active }: IShowSideBar) {
    
    function closeSideBar() {
        active(false)
    }

    return (
        <div className="side-bar">
            <div className="close-sidebar-logo">
                <FaTimes onClick={closeSideBar} />
            </div>
            <ul className="list-title">Gerações/Regiões
                <li onClick={}>1ª Geração (Kanto)</li>

            </ul>
        </div>
    )
}