import React from 'react'
import './card.scss'

const Card = ({title, img, description}) => {
  return (
    <div className='card'>
      <img className='card__img' src={img}/>
      <h1 className='card__title'>{title}</h1>
      <p className='card__description'>{description}</p>
    </div>
  )
}

export default Card