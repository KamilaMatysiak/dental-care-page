import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/scss/common.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-section'>
            <Link className='logo-section__logo' to='/'>IDENTI</Link>
            <p className='logo-section__desc'>Twoje zęby w dobrych rękach!</p>
        </div>
        <div className='footer-menu'>
            <Link to='/about' className='footer-menu__item'>O Nas</Link>
            <Link to='/prices' className='footer-menu__item'>Cennik</Link>
            <Link to='/faq' className='footer-menu__item'>FAQ</Link>
            <Link to='/contact' className='footer-menu__item'>Kontakt</Link>
        </div>
    </div>
  )
}

export default Footer