import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu'

import { Discover } from './pages/Discover'
import { Join } from './pages/Join'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Feel } from './pages/Feel'

const App = () =>  {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path='/' element={<Feel/>} />
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
