import { Footer } from '../components/Footer'
import '../styles/discover.css'

export const Discover = () => {
  return (
    <>
    <main>
    <section id='discover-section' className='content'> 
      <div className='text-div'>
        <h1>Discover new music</h1>
        <div className='discover-btns'>
            <button><img src="assets/microphone.svg" alt="" /><span>Charts</span></button>
            <button><img src="assets/albums.svg" alt="" /><span>Albums</span></button>
            <button><img src="assets/more.svg" alt="" /><span>More</span></button>
        </div>
        <p>By joining you can benefit by listening the lastest albums released.</p>
      </div>

      <div className='cover-img'>
        <img src="assets/covers.jpg" alt="" />
      </div>       
    </section>
    </main>
    <Footer />
    </>
  )
}