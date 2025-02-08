import React from 'react'
import "../Style Components/NavBar.css"

export const NavBar = () => {
  return (
    <section className='nav-Container'>
      <button className='nav-Btn'> 
        <img className="btn-Icon" src="/search.svg" alt="lupa-busqueda" />
        Hireline</button>
      <button className='nav-Btn'> 
        <img className="btn-Icon" src="/search.svg" alt="lupa-busqueda" />
        OCC Mundial</button>
      <button className='nav-Btn'> 
        <img className="btn-Icon" src="/search.svg" alt="lupa-busqueda" />
        Computrabajo </button>
      <button className='nav-Btn'>
        <img className="btn-Icon" src="/search.svg" alt="lupa-busqueda" />
        Indeed </button>
    </section>
  )
}
