import React from 'react'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Statistics from './components/Statistics/Statistics'
import About from './components/About/About'
import Contact from '../Contact/Contact'
import './homepage.scss'

import office from '../../assets/img/office.svg'
import whitening from '../../assets/img/whitening.svg'
import implants from '../../assets/img/implants.svg'
import products from '../../assets/img/products.svg'

const Homepage = () => {

  const cardData = [
    {icon: office, title: 'Nowoczesny gabinet', desc: 'Posiadamy najlepszej jakości sprzęt, jak i najwygodniejsze fotele'},
    {icon: whitening, title: 'Wybielanie zębów', desc: 'Ciesz się białym uśmiechem jednocześnie dbając o swoje szkliwo'},
    {icon: implants, title: 'Implanty zębów', desc: 'Zadbaj o pełny uśmiech poprzez specjalistyczne implanty'},
    {icon: products, title: 'Polecane produkty', desc: 'W naszych gabinetach kupisz produkty polecane przez naszych specjalistów'},
  ]

  return (
    <div className='home-page'>
      <Banner/>
      <div className='home-page__card-container'>
        {cardData.map((card) => (
          <Card img={card.icon} title={card.title} description={card.desc}/>
        ))}
      </div>
      <Statistics/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Homepage