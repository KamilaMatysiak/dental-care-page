import React from 'react'
import { prices } from './components/prices'
import './Prices.scss'

const Prices = () => {
  return (
    <div className='price'>
      <h1 className='price__header'>Cennik</h1>
      {prices.map((price) => (
        <>
          <h1 className='price__title'>{price.header}</h1>
          {price.data.map((p) => (
            <div className='price__row'>
              <p className='price__name'>{p.name}</p>
              <h2 className='price__price'>{p.price} zł</h2>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export default Prices