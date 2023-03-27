import React from 'react'
import './statistics.scss'

const Statistics = () => {

    const statistics = [
        {number: '5', text: 'dostępnych gabinetów'},
        {number: '100+', text: 'zadowolonych pacjentów'},
        {number: '3', text: 'nagrody Orłów Stomatologii'},
    ]


  return (
    <div className='stats'>
        {statistics.map((s, i) => (
            <div key={i} className='stat'>
                <h1 className='stat__number'>{s.number}</h1>
                <p className='stat__text'>{s.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Statistics