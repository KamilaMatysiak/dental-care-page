import React, {useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <div className='navbar'>
        <NavLink className='navbar__logo' to='/'>IDENTI</NavLink>
        <ul className='navbar__menu'>
            <li className='menu-item'><NavLink className={`menu-item__link menu-item__link${location.pathname === '/about' && '--active'}`} to='/about'>O NAS</NavLink></li>
            <li className='menu-item'><NavLink className={`menu-item__link menu-item__link${location.pathname === '/prices' && '--active'}`} to='/prices'>CENNIK</NavLink></li>
            <li className='menu-item'><NavLink className={`menu-item__link menu-item__link${location.pathname === '/faq' && '--active'}`} to='/faq'>FAQ</NavLink></li>
            <li className='menu-item'><NavLink className={`menu-item__link menu-item__link${location.pathname === '/contact' && '--active'}`} to='/contact'>KONTAKT</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar