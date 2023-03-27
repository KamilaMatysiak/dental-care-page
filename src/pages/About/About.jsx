import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className='about-page'>
        <h1 className='about-page__header'>O NAS</h1>
        <p className='about-page__desc'> I need some bullshit here.<br/>
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
            Long long bullshit. Long long bullshit. 
        </p>
        <div className='section-container'>
            <div className='section'>
                <h1 className='section__header'>Nasi lekarze:</h1>
                <div className='our-staff'>
                    <div className='staff-info'>
                        <h1 className='staff-info__header'>dr. med.</h1>
                        <p className='staff-info__address'>Jan Kowalski</p>
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info__header'>dr. med.</h1>
                        <p className='staff-info__address'>Anna Piasek</p>
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info__header'>dr. med.</h1>
                        <p className='staff-info__address'>Robert Działowy</p>
                    </div>
                </div>
            </div>
            
            <div className='section'>
                <h1 className='section__header'>Znajdziesz nas tutaj:</h1>
                <div className='our-office'>
                    <div className='office-info'>
                        <h1 className='office-info__header'>POZNAŃ</h1>
                        <p className='office-info__address'>Opieńskiego 11</p>
                    </div>
                    <div className='office-info'>
                        <h1 className='office-info__header'>WARSZAWA</h1>
                        <p className='office-info__address'>Słoneczna 2</p>
                    </div>
                    <div className='office-info'>
                        <h1 className='office-info__header'>WROCŁAW</h1>
                        <p className='office-info__address'>Szkolna 1</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About