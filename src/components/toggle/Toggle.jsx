import React, { useContext } from 'react'
import './toggle.css'
import Icon from '../../images/babel.jpg'
import Econ from '../../images/babel.jpg'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext)
  
  const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className='t'>
        <img src={Icon} alt='' className='t-icon'/>
        <img src={Econ} alt='' className='t-icon'/>
        <div className='t-button' onClick={handleClick} ></div>
    </div>
  )
}

export default Toggle