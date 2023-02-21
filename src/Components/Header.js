import React from 'react'
import "./header.css"
import nav from './img/nav.jpeg'
const Header = () => {
  return (
    <>
      <div className='nav'>
        <img src={nav} alt='logo' width='40px' height='40px'/>
        <h1 >Notes</h1>
      </div>
    </>
  )
}

export default Header
