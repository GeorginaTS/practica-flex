import { Button } from '@mui/material'
import '../styles/feel.css'

export const Feel = () => {
  return (
    <>
    <div className='circle1'></div>
    <div className='circle2'></div>
    <div className='circle3'></div>
  <main>
    <section id='feel-section'>
        <div className='img-div'> <img src="assets/landing-page-girl.png" alt="" /></div>
        <div className='text-div'>
          <h1>Feel The Music</h1>
          <h2>Stream over 20 thousand songs with one click</h2>
          <Button 
              variant="contained" 
              sx={{
                width: 100,
                fontSize: "0.8rem",
                textTransform: "none",
              }}
            >Join Now</Button>
        </div>
    </section>
  </main>
  </>
  )
}
