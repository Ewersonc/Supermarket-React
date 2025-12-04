import { useState } from 'react'
import Login from './Login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Cadastro from './Cadastro/Cadastro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
