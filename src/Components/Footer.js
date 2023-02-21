import React from 'react'
import './footer.css'
import copyright from './img/copyright.jpeg'
const Footer = () => {
    const year= new Date().getFullYear()
  return (
    <>
      <footer className='foot'>
        <p> CopyRight © {year}</p>
      </footer>
    </>
  )
}

export default Footer
