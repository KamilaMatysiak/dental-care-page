import React from 'react'
import { questions } from './components/data'
import Question from './components/Question'
import './FAQ.scss'

const FAQ = () => {
  return (
    <div className='faq-page'>
      <h1 className='faq-page__header'>Często zadawany pytania</h1>
      <div className='faq-page__questions'>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer}/>
      ))}
      </div>
    </div>
  )
}

export default FAQ