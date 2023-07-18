import { Link } from 'react-router-dom'

export const Menu = () => {

  return (
    <header>
    <nav>
      <div className='logo'><Link to='/feel'><img src='assets/logo.png' alt="Logo Soundwave" /></Link>Soundwave</div>
      <div><Link to='/discover'>Discover</Link> <Link to='/join'>Join</Link></div>
    </nav>
    </header>
  )
}
