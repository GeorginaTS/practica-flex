import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {

  return (
    <>
    <nav>
      <div><Link to='/feel'><img src='./src/assets/logo.png' alt="Logo Soundwave" /></Link>Soundwave</div>
      <div className='container'><Link to='/discover'>Discover</Link> <Link to='/join'>Join</Link></div>
    </nav>
    </>
  )
}
