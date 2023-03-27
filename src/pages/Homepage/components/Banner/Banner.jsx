import React from 'react'
import banner from '../../../../assets/img/banner.png'
import './banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <img className='banner__img' src={banner}/>
      <div className='banner-text'>
        <h1 className='banner-text__slogan'>Twoje zęby w dobrych rękach!</h1>
        <p className='banner-text__desc'>Skorzystaj z naszych usług i zadbaj o zdrowy uśmiech już dziś!</p>
        <button className='button'>Umów wizytę</button>
      </div>
    </div>
  )
}

export default Banner