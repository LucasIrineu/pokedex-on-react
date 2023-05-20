import React from 'react';
import pokeballpng from '../assets/pokeballIcon.png'

function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <img src={pokeballpng} className='loading-icon'></img>
      <p> Carregando... </p>
    </div>
  )
}

export default LoadingScreen;
