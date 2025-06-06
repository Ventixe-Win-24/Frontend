import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Symbol-ventixe.svg'

const Nav = () => {
  return (
    <nav>
        <div className="logo-section">
        <img src={Logo} alt="Symbol-ventixe" className="logo" />
        <h2 className="brand">Ventixe</h2>
        </div>
        <NavLink to="/">Events</NavLink>
    </nav>
  )
}

export default Nav