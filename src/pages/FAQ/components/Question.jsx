import React, {useState} from 'react'
import './Question.scss'

const Question = ({question, answer}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='question' onClick={() => setOpen(!open)}>
      <div className='question__header'>
        <h1 className='question__text'>{question}</h1>
        <p className='question__button'> {open ? '-' : '+'} </p>
      </div>
      { open && (
      <p className='question__answer'>
        {answer}
      </p>
      )}
    </div>
  )
}

export default Question