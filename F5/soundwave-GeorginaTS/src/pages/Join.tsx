
import { Footer } from '../components/Footer'
import { Button, TextField } from '@mui/material'

import '../styles/join.css'

export const Join = () =>  {
  return (
    <>
    <main>
    <section id='join-section' className='content'> 
    <div className='circle1'></div>
    <div className='circle2'></div>
    <div className='text-div'>
        <h1 >Join the <span className='accent-text'>fun.</span></h1>
    </div>
    <div className='form-div'>
        <form action="">
            <div>Name </div>
            <div><input name='name'/></div>
            <div>Email</div><div><input name='email'/></div>
            <div>Password</div><div><input name='password'/></div><br />
            <Button variant="contained" fullWidth={true}
               sx={{
                fontSize: "0.8rem",
                textTransform: "none",
              }}>Join Now</Button>
        </form>
    </div>

    </section>
    </main>
     <Footer />
     </>
  )
}
