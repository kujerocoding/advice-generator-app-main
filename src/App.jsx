import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='app--container'>
      <div className='quote--container'>
        <p className='quote--id'>Advice #117</p>
        <p className='quote--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nesciunt.</p>
        <div className='quote--divider'></div>
        <button>
          <img src="/src/assets/images/icon-dice.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default App
