import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [advice, setAdvice] = useState([])

  async function getAdvice(){
    const response = await fetch('	https://api.adviceslip.com/advice');
    const result = await response.json()
    setAdvice(result.slip)
  }

  useEffect(() => {
    getAdvice()
  },[])


  function handleClick(){
   setAdvice(getAdvice())
  }

  return (
    <div className='app--container'>
      <div>
      <div className='quote--container'>
        <p className='quote--id'>Advice # {advice.id}</p>
        <p className='quote--text'>"{advice.advice}"</p>
        <div className='quote--divider'></div>
        <button onClick={handleClick}>
          <img src="/src/assets/images/icon-dice.svg" alt="dice" />
        </button>
      </div>
      <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/challenges" target="_blank">Frontend Mentor.</a> Coded by <a href='https://github.com/kujerocoding' target="_blank">kujerocoding</a>
      </div>
      </div>
      
    </div>
  )
}

export default App
