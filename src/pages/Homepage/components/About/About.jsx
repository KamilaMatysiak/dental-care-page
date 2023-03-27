import React from 'react'
import about from '../../../../assets/img/about.png'
import products from '../../../../assets/img/products.png'
import team from '../../../../assets/img/team.png'
import './About.scss'

const About = () => {
  return (
    <div>
      <div className='about-section'>
        <div className='text-section'>
          <p className='text-section__header'>O NAS</p>
          <p className='text-section__desc'>
            IDENTI powstało w 2020 roku jako nowoczesny 
            gabinet stomatologiczny. 
          </p>
        </div>
        <img src={about} className='about-section__img'/>
      </div>  
      <div className='about-section'>
        <img src={products} className='about-section__img'/>
        <div className='text-section'>
          <p className='text-section__header'>NASZE PRODUKTY</p>
          <p className='text-section__desc'>
            W naszych gabinetach znajdziesz zarówno 
            polecane produkty partnerskie, jak i nasze 
            własne. W zaopatrzeniu posiadamy wszystko 
            od sprawdzonych past do zębów do alignerów.
          </p>
        </div>
      </div>  
      <div className='about-section'>
        <div className='text-section'>
          <p className='text-section__header'>NASI SPECJALIŚCI</p>
          <p className='text-section__desc'>
            Wspaniała kadra specjalistów zadba o każdy
            detal podczas Twojej wizyty, od rejestracji 
            po rekonwalescencję. Posiadamy na pokładzie 
            wybitnych ortodontów, protetyków, chirurgów 
            stomatologicznych i stomatologów dziecięcych.  </p>
        </div>
        <img src={team} className='about-section__img'/>
      </div>  
    </div>
  )
}

export default About