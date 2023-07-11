import React from 'react'
import { Footer } from '../components/Footer'

export const Join = () =>  {
  return (
    <>
    <h1>Join the <span className='accent-text'>fun.</span></h1>
    <div>
        <form action="">
            <div>Name <input type="text" name='name'/></div>
            <div>Email<input type="text" name='email'/></div>
            <div>Password<input type="text" name='password'/></div>
        </form>
    </div>

    <Footer />
    </>
  )
}
