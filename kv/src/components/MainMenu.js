import React, { useState, useContext} from 'react'
import { QuizContext } from '../contexts/Contexts'
import './MainMenu.css'
const MainMenu = () => {
const {gameState, setGameState}= useContext(QuizContext)
const menuHandler = ()=>{
    setGameState("quiz")
}
return (
    <div className='menu'>
        <h2 className='menutitle'>Kurtlar vadisi hakkındaki bilgilerine güveniyorsan hemen başla !</h2>
        <button className="start-btn" onClick={menuHandler}>Başla</button>
    </div>
  )
}

export default MainMenu

