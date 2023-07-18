

import { Menu } from './components/Menu'

import { Discover } from './pages/Discover'
import { Join } from './pages/Join'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Feel } from './pages/Feel'

import './styles/variables.css'
import './App.css'

const App = () =>  {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path='/' element={<Feel/>} />
          <Route path='/feel' element={<Feel/>} />
          <Route path='/discover' element={<Discover/>} />
          <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
