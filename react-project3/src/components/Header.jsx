import React from 'react'
import logo from '../assets/invest.png'

const Header = () => {
  return (
    <header id='header'> 
    <img src={logo} alt="investment" />
    <h1>Investment Calculator</h1>

    </header>
  )
}

export default Header