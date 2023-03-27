import React from 'react'
import map from '../../assets/img/map.png'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact-section'>
      <img className='contact-section__map' src={map}/>
      <div className='text-section'>
        <p className='text-section__header'>KONTAKT</p>
        <h1 className='text-section__title'>Skontaktuj się z nami!</h1>
        <p className='text-section__name'>IDENTI sp. z.o.o.</p>
        <p className='text-section__data'>NIP: 1234567890</p>
        <p className='text-section__data'>biuro_obsługi@identi.pl</p>
        <p className='text-section__data'>+48 123 456 789</p>
        <p className='text-section__data'>Słoneczna 2</p>
        <p className='text-section__data'>00-001 Warszawa</p>
      </div>  
    </div>
  )
}

export default Contact